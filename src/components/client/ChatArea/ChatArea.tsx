// Create a chat area component that will display the messages from the database.
// 
"use client"

import store from "@/store/store";
import ChatBox from "./ChatBox";

import React, { PropsWithRef, useEffect, useRef } from "react";
export const  ChatArea=  () =>{
 const conversation = store()
  
  // store.setState({ message: [{ id: "s", text: "s", user: false }] })
  return (
    <div className=" flex-1 min-h-[55vh] py-24 w-full flex flex-col overflow-y-auto border border-gray-300 rounded p-5 bg-gray-100" >
   {conversation.getMessages().map((message,idx) => (
    <ChatBox key={idx} message={message} />
    ))}

      {/* {JSON.stringify(store.getState().message)} */}
      {/* <ChatButton >{store.getState().message.length}</ChatButton> */}
    </div>
  )
}