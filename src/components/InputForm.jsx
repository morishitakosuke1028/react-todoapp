import { useState } from "react";

export const InputForm = ({taskList, setTaskList}) => {

	const [inputText, setInputText] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault();

		setTaskList([
			...taskList,
			{
				text: inputText
			}
		]);
		// console.log(taskList);
		setInputText('');
	}

	const handleChange = (e) => {
		setInputText(e.target.value);
		// console.log(inputText);
	}

	return (
		<div className='inputForm'>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={inputText} />
				<button>
					<i className="fas fa-plus-square"></i>
				</button>
			</form>
		</div>
	)
}
