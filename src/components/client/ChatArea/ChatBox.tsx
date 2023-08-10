import { Message } from "@/store/useConversation";
import React from "react";

const USER_MESSAGE_CLASS  = "max-w-md p-4 mb-5 rounded-lg self-end bg-blue-500 text-white";
const MODEL_MESSAGE_CLASS = "max-w-md p-4 mb-5 rounded-lg self-start bg-gray-200 text-black";


const ChatBox:React.FC<{message:Message}>=({message})=>{
    return  <div className={message.user?USER_MESSAGE_CLASS:MODEL_MESSAGE_CLASS}>
    {message.text}
  </div>

}

export default ChatBox;