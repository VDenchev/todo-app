import React, { useRef, useState } from "react"

const TodoInput = ({ handleEnterKeyPress }) => {
	const [todo, setTodo] = useState({ isCompleted: false, message: "" })

	const inputElement = useRef(null)
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
		<div className="bg-white dark:bg-dark-blue-700 rounded-md p-3 px-5 md:p-4 md:px-6 flex items-center mb-4 md:mb-6 gap-3 isolate shadow-sm">
			<input
				type="checkbox"
				name="isCompleted"
				checked={todo.isCompleted}
				onChange={updateTodo}
				onClick={() => inputElement.current.focus()}
				id=""
				className="w-5 h-5 before:-z-[1] grid flex-shrink-0 before:grid before:-m-[2px] cursor-pointer appearance-none rounded-full border border-light-blue-300 dark:border-dark-blue-600 checked:dark:border-transparent checked:border-transparent before:content-check before:rounded-full before:w-6 before:h-6 before:bg-gradient-to-br before:text-center before:leading-7 before:from-gradient1 before:to-gradient2 before:scale-75 before:checked:scale-100 before:transition-all before:delay-75 delay-75 hover:border-transparent box-content before:hover:scale-100 bg-inherit checked:bg-transparent transition-transform"
			/>
			<input
				type="text"
				name="message"
				ref={inputElement}
				id=""
				placeholder="Create a new todo..."
				value={todo.message}
				onChange={updateTodo}
				onKeyDown={handleKeyDown}
				className="bg-transparent text-sm md:text-lg text-light-blue-500 dark:text-dark-blue-300 pt-1 focus:outline-none caret-blue leading-none w-full"
			/>
		</div>
	)
}

export default TodoInput
