import React from "react"
import Sun from "../Images/icon-sun.svg"
import Moon from "../Images/icon-moon.svg"
const Title = () => {
	return (
		<div className="flex justify-between mb-4">
			<h1 className="text-white text-xl tracking-[0.5rem]">TODO</h1>
			<input type="checkbox" name="DarkMode" id="DarkMode" className="hidden" />
			<label htmlFor="DarkMode">
				<img src={Moon} alt="toggle" />
			</label>
		</div>
	)
}

export default Title
