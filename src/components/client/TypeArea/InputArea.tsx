"use client"
import store from "../../../store/store"
import {invoke} from "@tauri-apps/api"

export function InputArea() {
  const conversation=store()
  return (
    <div>
      <button type="button" onClick={() => {
        invoke("get_conversation", { text: "hello" }).then((res)=>{
          const response =  res as string
          console.log(response)
          conversation.addMessage({id:response,text:response,user:false})
        })
      }}>Type Area</button>
      <p>message : {conversation.message.map((item)=>item.text).join(" ")}</p>
    </div>
  );
}
