import React, { useState } from "react"
import Todo from "./Todo.jsx"

const List = () => {
	return (
		<div className="bg-white rounded-md">
			<Todo></Todo>
			<div className="flex justify-between relative p-3">
				<p>5 items left</p>
				<div className="flex justify-center gap-5 absolute left-0 top-16 bg-white rounded-md p-3 w-full">
					<input
						type="radio"
						name="buttons"
						id="All"
						value="4"
						className="hidden"
					/>
					<label htmlFor="All">All</label>
					<input
						type="radio"
						name="buttons"
						id="Active"
						value="5"
						className="hidden"
					/>
					<label htmlFor="Active">Active</label>
					<input
						type="radio"
						name="buttons"
						id="Completed"
						value="6"
						className="hidden"
					/>
					<label htmlFor="Completed">Completed</label>
				</div>
				<button>Clear Completed</button>
			</div>
		</div>
	)
}

export default List
