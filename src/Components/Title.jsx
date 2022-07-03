import React, { useState } from "react"
import Sun from "../Images/icon-sun.svg"
import Moon from "../Images/icon-moon.svg"
const Title = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	document.body.className = isDarkMode ? "dark" : ""

	return (
		<div className="flex justify-between mb-8 md:mb-10">
			<h1 className="text-white text-xl md:text-3xl tracking-[0.5rem] font-bold">
				TODO
			</h1>
			<input
				type="checkbox"
				name="DarkMode"
				id="DarkMode"
				checked={isDarkMode}
				onChange={() => setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode)}
				className="hidden"
			/>
			<label htmlFor="DarkMode" className="cursor-pointer">
				<img
					src={isDarkMode ? Sun : Moon}
					alt="toggle"
					className="w-[22px] md:w-[30px]"
				/>
			</label>
		</div>
	)
}

export default Title
