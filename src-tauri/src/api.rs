pub mod api {
    use crate::models::message::{ Message};
    use std::convert::Infallible;

    #[tauri::command]
    pub fn get_conversation(conversation: String) -> String {
        // return conversation.to_string();
        
    

        use llm::models::Llama;
        use llm::KnownModel;
        use serde_json;
        let messages= serde_json::from_str::<Vec<Message>>(&conversation).unwrap();
        let character_name = "### Assistant";
        let user_name = "### Human";
        let persona = "A chat between a human and an assistant.";
        let mut history = format!(
            "{character_name}:Hello - How may I help you today?\n\
            {user_name}:What is the capital of France?\n\
            {character_name}:Paris is the capital of France.\n"
        );
        for message in messages.into_iter() {
            let msg = message.text;
            let curr_line = if message.user {
                format!("{user_name}:{msg}\n")
            } else {
                format!("{character_name}:{msg}\n")
            };

            history.push_str(&curr_line);
        }

        let mut res = String::new();
        let mut rng = rand::thread_rng();
        let mut buf = String::new();
        use std::path::PathBuf;
        let model_path = "/home/badar/workspace/personal/projects/chat-me-rust/llama-chat/llama-chat/src-tauri/src/models/model.bin";
        let model_parameters = llm::ModelParameters {
            prefer_mmap: true,
            context_size: 2048,
            gpu_layers: None,
            rope_overrides: None,
            lora_adapters: None,
            use_gpu: true,
        };
        let model = llm::load::<Llama>(
            &PathBuf::from(&model_path),
            llm::TokenizerSource::Embedded,
            model_parameters,
            llm::load_progress_callback_stdout,
        )
        .unwrap_or_else(|err| panic!("Failed to load model from {model_path:?}: {err}"));

        let mut session = model.start_session(Default::default());
        session
            .infer(
                &model,
                &mut rng,
                &llm::InferenceRequest {
                    prompt: format!("{persona}\n{history}\n{character_name}:")
                        .as_str()
                        .into(),
                    parameters: &llm::InferenceParameters::default(),
                    play_back_previous_tokens: false,
                    maximum_token_count: None,
                },
                &mut Default::default(),
                inference_callback(String::from(user_name), &mut buf, &mut res),
            )
            .unwrap_or_else(|e| panic!("{e}"));

        res
    }
    pub fn inference_callback<'a>(
        stop_sequence: String,
        buf: &'a mut String,
        out_str: &'a mut String,
    ) -> impl FnMut(llm::InferenceResponse) -> Result<llm::InferenceFeedback, Infallible> + 'a {
        use llm::InferenceFeedback::Continue;
        use llm::InferenceFeedback::Halt;

        move |resp| match resp {
            llm::InferenceResponse::InferredToken(t) => {
                let mut reverse_buf = buf.clone();
                reverse_buf.push_str(t.as_str());
                if stop_sequence.as_str().eq(reverse_buf.as_str()) {
                    buf.clear();
                    return Ok::<llm::InferenceFeedback, Infallible>(Halt);
                } else if stop_sequence.as_str().starts_with(reverse_buf.as_str()) {
                    buf.push_str(t.as_str());
                    return Ok(Continue);
                }

                if buf.is_empty() {
                    out_str.push_str(&t);
                } else {
                    out_str.push_str(&reverse_buf);
                }

                Ok(Continue)
            }
            llm::InferenceResponse::EotToken => Ok(Halt),
            _ => Ok(Continue),
        }
    }
}
