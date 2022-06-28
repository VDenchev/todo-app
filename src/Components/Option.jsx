import React from "react"

const Option = ({ text }) => {
	return (
		<>
			<input
				type="radio"
				name="buttons"
				id={text}
				value="4"
				className="hidden [&+*]:checked:text-blue"
			/>
			<label
				htmlFor={text}
				className="font-bold cursor-pointer hover:text-light-blue-500 transition duration-200">
				{text}
			</label>
		</>
	)
}

export default Option
