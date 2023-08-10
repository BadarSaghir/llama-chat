"use client"
import { ChangeEvent, useState } from "react"
import store from "../../../store/store"
import { invoke } from "@tauri-apps/api"

export function InputArea() {
    const [message, setMessage] = useState("")
    const conversation = store()
    function handleMessage(event: ChangeEvent<HTMLInputElement>): void {
        event.preventDefault()
        setMessage(event.target.value)

    }

    return (


        <form className="w-full flex justify-center items-center gap-4" onSubmit={
            (e) => {
                e.preventDefault()
                invoke("get_conversation", { text: "hello" }).then((res) => {
                    const response = res as string
                    console.log(response)
                    conversation.addMessage({ id: response, text: response, user: false })
                })
            }
        }
        >
            <input className="w-2/3 p-4 border border-gray-300 rounded-full" type="text" placeholder="Enter your prompt" />
            <input className="h-full p-4 bg-blue-500 text-white rounded-full cursor-pointer"
                onChange={handleMessage} type="submit" />
        </form>

    )
    {/* <button type="button" onClick={() => {
        invoke("get_conversation", { text: "hello" }).then((res)=>{
          const response =  res as string
          console.log(response)
          conversation.addMessage({id:response,text:response,user:false})
        })
      }}>Type Area</button>
      <p>message : {conversation.message.map((item)=>item.text).join(" ")}</p> */}


}
