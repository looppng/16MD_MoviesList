import style from './textarea.module.css'
import {useId} from "react";

type TextareaProps = {
	placeholder: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const Textarea = ({placeholder, value, onChange}: TextareaProps) => {
	const id = useId()

	return (
			<div className={style.wrapper}>
					<textarea
							id={id}
							className={style.textarea}
							placeholder={placeholder}
							value={value}
							onChange={onChange}
					>
				</textarea>
			</div>

	);
};

export default Textarea;