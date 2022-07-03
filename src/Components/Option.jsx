import React from "react"

const Option = ({ text, isChecked }) => {
	return (
		<>
			<input
				type="radio"
				name="buttons"
				id={text}
				checked={isChecked}
				className="hidden [&+*]:checked:text-blue"
			/>
			<label
				htmlFor={text}
				className="font-bold cursor-pointer hover:text-light-blue-500 hover:dark:text-dark-blue-200 transition duration-200">
				{text}
			</label>
		</>
	)
}

export default Option
