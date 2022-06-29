import React from "react"
import Cross from "../Images/icon-cross.svg"
import Check from "../Images/icon-check.svg"
const Todo = ({ isChecked, message, setTodoList }) => {
	//Problem/Feature???
	//If there are more than 1 todos
	//with the same message it will complete/remove all of them
	const completeTodo = () => {
		setTodoList((prevTodoList) => {
			return prevTodoList.map((todo) => {
				if (message === todo.message) {
					todo.isCompleted = true
				}
				return todo
			})
		})
	}

	const removeTodo = () => {
		setTodoList((prevTodoList) => {
			return prevTodoList.filter((todo) => todo.message !== message)
		})
	}
	return (
		<div className="flex gap-3 p-3 border-b group">
			<input
				type="radio"
				checked={isChecked}
				disabled={isChecked}
				className="w-5 h-5 before:-z-[1] before:-m-[2px] cursor-pointer [&+*]:checked:line-through [&+*]:checked:text-light-blue-400 appearance-none rounded-full border border-light-blue-300 checked:border-transparent before:content-check before:absolute before:rounded-full before:w-6 before:h-6 before:bg-gradient-to-br before:text-center before:leading-7 overflow-hidden before:from-gradient1 before:to-gradient2 before:scale-0 before:checked:scale-100 before:transition-all before:delay-200 delay-200 hover:border-transparent box-content before:hover:scale-100 bg-white checked:bg-transparent transition-all"
				onChange={completeTodo}
			/>
			<p className="my-auto mr-auto -mb-[2px] text-light-blue-500 transition-all delay-200 text-sm">
				{message}
			</p>
			<button
				className="w-3 h-3 self-center opacity-0 group-hover:opacity-100 transition-all delay-200"
				onClick={removeTodo}>
				<img src={Cross} alt="X" />
			</button>
		</div>
	)
}

export default Todo
