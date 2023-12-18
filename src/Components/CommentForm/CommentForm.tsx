import style from './CommentFrom.module.css'
import {useId} from "react";
import Button from "../Button/button.tsx";

type CommentFormProps = {
	loading: boolean
	value?: string;
	label: string;
	placeholder: string
	type?: HTMLTextAreaElement['type'];
	onSubmit?: () => void
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const CommentForm = ({placeholder, value, onChange, label}: CommentFormProps) => {
	const id = useId()

	return (
		<div className="container mt-3">
			<div className={style.wrapper}>
				<form>
					<label htmlFor={id}>{label}</label>
					<textarea
							id={id}
							className={style.textarea}
							placeholder={placeholder}
							value={value}
							onChange={onChange}
					/>
					<Button text='Submit' type='submit'/>
				</form>
			</div>
		</div>
	);
};

export default CommentForm;