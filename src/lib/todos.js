import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const todosList = [
	{
		id: 1,
		title: "Premier todo de test",
		completed: false,
	},
	{
		id: 2,
		title: "Un autre todo de test",
		completed: false,
	},
];

export const useTodos = (initialTodos) => {
	const [todos, setTodos] = useState(initialTodos);

	const addTodo = (title) => {
		const todo = {
			id: uuidv4(),
			title,
			completed: false,
		};
		setTodos([...todos, todo].sort((a, b) => a.title.localeCompare(b.title)));
	};

	const deleteTodo = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const todosUpdated = [...todos];
		todosUpdated.splice(index, 1);
		setTodos(todosUpdated);
	};

	const updateTodo = (id, newTitle) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const todosUpdated = [...todos];
		todosUpdated[index].title = newTitle;
		setTodos(todosUpdated);
	};

	const toggleTodo = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const todosUpdated = [...todos];
		todosUpdated[index].completed = !todosUpdated[index].completed;
		setTodos(todosUpdated);
	};

	return { todos, addTodo, deleteTodo, updateTodo, toggleTodo };
};
