import Textarea from "../../Components/TextArea/textarea.tsx";
import {useState} from "react";
import Button from "../../Components/Button/button.tsx";

const initCommentValues = {
	value: ''
}

type Comment = typeof initCommentValues

type CommentProps = {
	onSubmit: (payload: Comment) => void
}

const MovieComments = ({onSubmit} : CommentProps) => {

	const [textValues, setTextValues] = useState(initCommentValues)

	return (
		<div className="container mt-3">
			<div>Comments HERE</div>
			<h2>Add a comment...</h2>
			<form onSubmit={(e) => {
				e.preventDefault()
				onSubmit(textValues)
				setTextValues(initCommentValues)
				}}>
				<Textarea
					placeholder='Insert a comment here'
					value={textValues.value}
					onChange={(e) => {
						setTextValues({
							...textValues,
							value: e.target.value
						})
					}}
				/>
				<Button text='Submit' type='submit'/>
			</form>
		</div>
	);
};

export default MovieComments;