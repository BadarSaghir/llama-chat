import { TypeArea } from "../../components/TypeArea/TypeArea";
import { ChatArea } from "../../components/ChatArea/ChatArea";

export default function Home() {
	return (

		<main className="flex min-h-screen flex-col items-center justify-between p-24">

			<ChatArea />

			<TypeArea />

		</main>
	);
}