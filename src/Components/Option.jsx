import React from "react"

const Option = ({ text }) => {
	return (
		<>
			<input
				type="radio"
				name="buttons"
				id={text}
				value="4"
				className="hidden"
			/>
			<label htmlFor={text}>{text}</label>
		</>
	)
}

export default Option
