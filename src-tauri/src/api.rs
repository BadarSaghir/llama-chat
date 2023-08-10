pub mod api{
    #[tauri::command]
    pub fn get_conversation(text:String) ->Result<String,String> {
    if (text=="error"){ 
    return Err("error".to_string());
    }
    return Ok(text);
    
        // If it worked
  // If it worked
       
    }
    // #[tauri::command]
    // pub fn sub(a: i32, b: i32) -> i32 {
    //     a - b
    // }
}