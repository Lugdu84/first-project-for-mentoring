import Link from "next/link";
import { todosList } from "@/lib/todos";
import TodoRow from "../components/TodoRow";
// import { v4 as uuidv4 } from "uuid";
import { useTodos } from "@/lib/todos";

export default function Todos() {
	// const [todos, setTodos] = useState(todosList);
	const { todos, addTodo, deleteTodo, updateTodo, toggleTodo } =
		useTodos(todosList);
	const handleSubmit = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		// const todo = {
		// 	id: uuidv4(),
		// 	title,
		// 	completed: false,
		// };
		addTodo(title);
		e.target.reset();
	};

	// const handleCheck = (id) => {
	// 	const index = todos.findIndex((todo) => todo.id === id);
	// 	const todosUpdated = [...todos];
	// 	todosUpdated[index].completed = !todosUpdated[index].completed;
	// 	setTodos(todosUpdated);
	// };

	// const handleDelete = (id) => {
	// 	const index = todos.findIndex((todo) => todo.id === id);
	// 	const todosUpdated = [...todos];
	// 	todosUpdated.splice(index, 1);
	// 	setTodos(todosUpdated);
	// };

	return (
		<div>
			<Link href={"/"}>Lien vers la HomePage</Link>
			<h1 className="text-center">Todos</h1>
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
			{todos.map((todo) => (
				<TodoRow
					onDelete={() => deleteTodo(todo.id)}
					onCheck={() => toggleTodo(todo.id)}
					key={todo.id}
					todo={todo}
				/>
			))}
		</div>
	);
}
