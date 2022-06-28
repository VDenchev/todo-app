import React, { useState } from "react"
import Todo from "./Todo.jsx"
import Option from "./Option.jsx"

const List = () => {
	return (
		<div className="bg-white rounded-md text-xs isolate shadow-sm">
			<Todo></Todo>
			<div className="flex justify-between relative p-3 text-light-blue-400">
				<p>5 items left</p>
				<div className="flex justify-center gap-5 absolute left-0 top-16 bg-white rounded-md p-3 w-full shadow-sm">
					<Option text="All"></Option>
					<Option text="Active"></Option>
					<Option text="Completed"></Option>
				</div>
				<button className="hover:text-light-blue-500 transition duration-200">
					Clear Completed
				</button>
			</div>
		</div>
	)
}

export default List
