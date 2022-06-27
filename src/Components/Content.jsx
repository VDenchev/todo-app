import React from "react"
import List from "./List.jsx"
import Title from "./Title.jsx"
import TodoInput from "./TodoInput.jsx"

const Content = () => {
	return (
		<div className="absolute top-14 left-1/2 -translate-x-1/2 w-[87%]">
			<Title />
			<TodoInput />
			<List></List>
		</div>
	)
}

export default Content
