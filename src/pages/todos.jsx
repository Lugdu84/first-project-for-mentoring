import Link from "next/link";
import { todos } from "@/lib/todos";

export default function Todos() {
	console.log(todos);
	return (
		<div>
			<h1>Todos</h1>
			<Link href={"/"}>Lien vers la HomePage</Link>
		</div>
	);
}
