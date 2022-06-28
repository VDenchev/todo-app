import React, { useState } from "react"
import Todo from "./Todo.jsx"
import Option from "./Option.jsx"

const List = () => {
	return (
		<div className="bg-white rounded-md">
			<Todo></Todo>
			<div className="flex justify-between relative p-3">
				<p>5 items left</p>
				<div className="flex justify-center gap-5 absolute left-0 top-16 bg-white rounded-md p-3 w-full">
					<Option text="All"></Option>
					<Option text="Active"></Option>
					<Option text="Completed"></Option>
				</div>
				<button>Clear Completed</button>
			</div>
		</div>
	)
}

export default List
