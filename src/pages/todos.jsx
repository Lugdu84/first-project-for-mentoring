import Link from "next/link";
import { todosList } from "@/lib/todos";
import TodoRow from "../components/TodoRow";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
	const [todos, setTodos] = useState(todosList);
	const handleSubmit = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const todo = {
			id: uuidv4(),
			title,
			completed: false,
		};
		setTodos([...todos, todo]);
		e.target.reset();
	};

	const handleCheck = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const todosUpdated = [...todos];
		todosUpdated[index].completed = !todosUpdated[index].completed;
		setTodos(todosUpdated);
	};

	const handleDelete = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const todosUpdated = [...todos];
		todosUpdated.splice(index, 1);
		setTodos(todosUpdated);
	};

	console.log("todos", todos);
	return (
		<div>
			<Link href={"/"}>Lien vers la HomePage</Link>
			<h1>Todos</h1>
			<form
				onSubmit={handleSubmit}
				className="flex gap-2 ml-2">
				<input
					className="text-slate-500 rounded-lg shadow-xl p-2"
					type="text"
					name="title"
				/>
				<input
					type="submit"
					value="Ajouter"
				/>
			</form>
			{todos
				.sort((a, b) => a.title.localeCompare(b.title))
				.map((todo) => (
					<TodoRow
						onDelete={() => handleDelete(todo.id)}
						onCheck={() => handleCheck(todo.id)}
						key={todo.id}
						todo={todo}
					/>
				))}
		</div>
	);
}
