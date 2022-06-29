import React, { useState } from "react"
import List from "./List.jsx"
import Title from "./Title.jsx"
import TodoInput from "./TodoInput.jsx"

const Content = () => {
	const [todoList, setTodoList] = useState([])
	console.log(todoList)
	return (
		<div className="absolute top-12 left-1/2 -translate-x-1/2 w-[87%]">
			<Title />
			<TodoInput handleEnterKeyPress={setTodoList} />
			<List todoList={todoList} setTodoList={setTodoList}></List>
		</div>
	)
}

export default Content
