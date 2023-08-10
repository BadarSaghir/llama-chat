"use client"

// import { InputArea } from "./InputArea";
import dynamic from 'next/dynamic'

const InputArea = dynamic(() => import('./InputArea').then((InputArea) => InputArea).catch((e) => e), {
  ssr: false,
})

export function TypeArea() {

  return (
    <div>
      <InputArea />
    </div>
  );
}