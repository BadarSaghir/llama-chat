import { TypeArea } from "../../components/client/TypeArea/TypeArea";
import { ChatArea } from "../../components/client/ChatArea/ChatArea";
import { Metadata } from "next";


   
export const metadata: Metadata = {
  title: 'LLAMA CHAT',
  description: 'Lama Chat bot for personalized conversation',
}

export default function Home() {
	return (

		<main className="flex min-h-screen flex-col items-center justify-between p-24">

			<ChatArea />

			<TypeArea />

		</main>
	);
}