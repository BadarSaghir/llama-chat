"use client"
import { TypeArea } from "../../components/client/TypeArea/TypeArea";
import { ChatArea } from "../../components/client/ChatArea/ChatArea";
import { Metadata } from "next";
import { useEffect, useRef } from "react";
import store from "@/store/store";



export default function Home() {
	// const conversation= store()
	// const chatDivRef= useRef<HTMLElement>(null);
	// if(chatDivRef.current)
	// chatDivRef.current.onscroll=(e)=>{
	// 	console.log(chatDivRef.current?.scrollTop)
	// }
	//  useEffect(()=>{
	  
	//   if (chatDivRef.current 
	//    ) {
	// 	chatDivRef.current.scrollTop= 0;
	//   }
	//  },[conversation.message.length])	
	 return (

		<main  className="flex min-h-[99%] flex-col items-center pb-48 justify-between p-24"  id="main">

			<ChatArea  />

			<TypeArea />

		</main>
	);
}