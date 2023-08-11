use tauri::Manager;

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
mod models;
mod api;

// use models::message::Apple;

#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            #[cfg(debug_assertions)] // only include this code on debug builds
            {
                let window = app.get_window("main").unwrap();
                window.open_devtools();
                window.close_devtools();
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![api::api::get_conversation])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
