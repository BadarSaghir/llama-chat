"use client"

// import { InputArea } from "./InputArea";
import dynamic from 'next/dynamic'

const InputArea = dynamic(() => import('./InputArea').then((InputArea) => InputArea.InputArea ).catch((e) => e), {
  ssr: false,
})

export function TypeArea() {

  return (
    <div className="h-24 w-full fixed bottom-0 flex justify-center items-center p-5 bg-white border-t border-gray-300">
      <InputArea />
    </div>
  );
}