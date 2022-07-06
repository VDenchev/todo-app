import React from "react"

const Option = ({ text, isChecked }) => {
	return (
		<>
			<input
				type="radio"
				name="buttons"
				id={text}
				checked={isChecked}
				onChange={(e) => (isChecked = e.target.checked)}
				className="hidden [&+*]:checked:text-blue"
			/>
			<label
				htmlFor={text}
				className="font-bold cursor-pointer hover:text-light-blue-500 hover:dark:text-dark-blue-200 transition duration-75">
				{text}
			</label>
		</>
	)
}

export default Option
