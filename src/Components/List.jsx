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
						<Todo
							isChecked={todo.isCompleted}
							message={todo.message}
							setTodoList={setTodoList}></Todo>
					))
				)
				break
			case "Active":
				setTodoElements(
					activeTodos.map((todo) => (
						<Todo
							isChecked={todo.isCompleted}
							message={todo.message}
							setTodoList={setTodoList}></Todo>
					))
				)
				break
			case "Completed":
				setTodoElements(
					completedTodos.map((todo) => (
						<Todo
							isChecked={todo.isCompleted}
							message={todo.message}
							setTodoList={setTodoList}></Todo>
					))
				)
				break
			default:
				break
		}
	}, [option, todoList])

	const clearCompletedTodos = () => {
		setTodoList(activeTodos)
	}

	return (
		<div className="bg-white rounded-md text-xs isolate shadow-sm">
			<div className="overflow-y-auto max-h-96 scroll-smooth bg-scroll">
				{todoElements}
			</div>
			<div className="flex justify-between relative p-4 px-5 md:px-6 text-light-blue-400">
				<p>{activeTodos.length} items left</p>
				<div
					className="flex justify-center items-center gap-5 absolute left-0 top-16 bg-white rounded-md p-4 w-full shadow-sm md:static md:bg-none md:shadow-none md:p-0 md:w-auto"
					onChange={(e) => setOption(e.target.id)}>
					<Option text="All" isChecked={option === "All"} />
					<Option text="Active" isChecked={option === "Active"} />
					<Option text="Completed" isChecked={option === "Completed"} />
				</div>
				<button
					className="hover:text-light-blue-500 transition duration-200"
					onClick={clearCompletedTodos}>
					Clear Completed
				</button>
			</div>
		</div>
	)
}

export default List
