"use client"

import React from "react"
import store from "../../store/store"
type ChatButtonProps = {
} & React.PropsWithChildren
export const ChatButton: React.FC<ChatButtonProps> = ({ children }) => {
   const conversation= store((conversation)=>conversation)


    return (<button onClick={() => {
        conversation.addMessage({id:"s",text:"s",user:false}) }}>
        {children}
      <p> 
     
        {conversation.getMessages().length}
        </p>
    </button>)

}

export default ChatButton
