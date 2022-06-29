import React, { useState } from "react"

const TodoInput = ({ handleEnterKeyPress }) => {
	const [todo, setTodo] = useState({ isCompleted: false, message: "" })

	const updateTodo = (e) => {
		const key = e.target.name
		const value = key === "isCompleted" ? e.target.checked : e.target.value
		setTodo((prevTodo) => ({ ...prevTodo, [key]: value }))
	}

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			handleEnterKeyPress((prevState) => [todo, ...prevState])
			resetTodo()
		}
	}

	const resetTodo = () => {
		setTodo({ isCompleted: false, message: "" })
	}
	console.log(todo)
	return (
		<div className="bg-white rounded-md p-3 flex items-center mb-4 gap-3 isolate shadow-sm">
			<input
				type="radio"
				name="isCompleted"
				checked={todo.isCompleted}
				onChange={updateTodo}
				id=""
				className="w-5 h-5 before:-z-[1] before:-m-[2px] cursor-pointer appearance-none rounded-full border border-light-blue-300 checked:border-transparent before:content-check before:absolute before:rounded-full before:w-6 before:h-6 before:bg-gradient-to-br before:text-center before:leading-7 overflow-hidden before:from-gradient1 before:to-gradient2 before:scale-0 before:checked:scale-100 before:transition-all before:delay-200 delay-200 hover:border-transparent box-content before:hover:scale-100 bg-white checked:bg-transparent transition-all"
			/>
			<input
				type="text"
				name="message"
				id=""
				placeholder="Create a new todo..."
				value={todo.message}
				onChange={updateTodo}
				onKeyDown={handleKeyDown}
				className="bg-transparent w-10/12 text-sm text-light-blue-500 pt-1 focus:outline-none caret-blue leading-none"
			/>
		</div>
	)
}

export default TodoInput
