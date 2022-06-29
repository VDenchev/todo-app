import React, { useEffect, useState } from "react"
import Todo from "./Todo.jsx"
import Option from "./Option.jsx"

const List = ({ todoList, setTodoList }) => {
	const [option, setOption] = useState("All")
	const [todoElements, setTodoElements] = useState([])

	const allTodos = todoList
	const activeTodos = todoList.filter((todo) => !todo.isCompleted)
	const completedTodos = todoList.filter((todo) => todo.isCompleted)
	useEffect(() => {
		switch (option) {
			case "All":
				setTodoElements(
					allTodos.map((todo) => (
						<Todo isChecked={todo.isCompleted} message={todo.message}></Todo>
					))
				)
				break
			case "Active":
				setTodoElements(
					activeTodos.map((todo) => (
						<Todo isChecked={todo.isCompleted} message={todo.message}></Todo>
					))
				)
				break
			case "Completed":
				setTodoElements(
					completedTodos.map((todo) => (
						<Todo isChecked={todo.isCompleted} message={todo.message}></Todo>
					))
				)
				break
			default:
				break
		}
	}, [option, todoList])

	return (
		<div className="bg-white rounded-md text-xs isolate shadow-sm">
			{todoElements}
			<div className="flex justify-between relative p-3 text-light-blue-400">
				<p>{activeTodos.length} items left</p>
				<div
					className="flex justify-center gap-5 absolute left-0 top-16 bg-white rounded-md p-3 w-full shadow-sm"
					onChange={(e) => setOption(e.target.id)}>
					<Option text="All" isChecked={option === "All"} />
					<Option text="Active" isChecked={option === "Active"} />
					<Option text="Completed" isChecked={option === "Completed"} />
				</div>
				<button className="hover:text-light-blue-500 transition duration-200">
					Clear Completed
				</button>
			</div>
		</div>
	)
}

export default List
