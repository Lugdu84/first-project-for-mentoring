import { HiOutlineTrash } from "react-icons/hi";

export default function TodoRow({ todo, onCheck, onDelete }) {
	return (
		<div className=" bg-white rounded-lg shadow-xl text-slate-500 p-2 m-2 flex justify-between">
			<p>{todo.title}</p>
			<div className="flex gap-2 items-center">
				<input
					onClick={onCheck}
					type="checkbox"
					value={todo.completed}
				/>
				<HiOutlineTrash
					color="red"
					onClick={onDelete}
				/>
			</div>
		</div>
	);
}
