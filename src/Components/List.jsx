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
		const createTodoElement = (todo) => {
			return (
				<Todo
					isChecked={todo.isCompleted}
					message={todo.message}
					setTodoList={setTodoList}></Todo>
			)
		}

		let displayedTodos = []
		switch (option) {
			case "All":
				displayedTodos = allTodos
				break
			case "Active":
				displayedTodos = activeTodos
				break
			case "Completed":
				displayedTodos = completedTodos
				break
			default:
				break
		}

		setTodoElements(displayedTodos.map(createTodoElement))
	}, [option, todoList])

	const clearCompletedTodos = () => {
		setTodoList(activeTodos)
	}

	return (
		<div className="bg-white dark:bg-dark-blue-700 rounded-md text-xs isolate shadow-sm">
			<div className="overflow-y-auto max-h-96 scroll-smooth bg-scroll">
				{todoElements}
			</div>
			<div className="flex justify-between relative p-4 px-5 md:px-6 text-light-blue-400 dark:text-dark-blue-400">
				<p>{activeTodos.length} items left</p>
				<div
					className="flex justify-center items-center gap-5 absolute left-0 top-16 bg-white dark:bg-dark-blue-700 rounded-md p-4 w-full shadow-sm md:static md:bg-none md:shadow-none md:p-0 md:w-auto"
					onChange={(e) => setOption(e.target.id)}>
					<Option text="All" isChecked={option === "All"} />
					<Option text="Active" isChecked={option === "Active"} />
					<Option text="Completed" isChecked={option === "Completed"} />
				</div>
				<button
					className="hover:text-light-blue-500 hover:dark:text-dark-blue-300 transition duration-75"
					onClick={clearCompletedTodos}>
					Clear Completed
				</button>
			</div>
		</div>
	)
}

export default List
