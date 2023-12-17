import style from './button.module.css'

type ButtonProps = {
	text: string
	onClick?: () => void
	type?: HTMLButtonElement['type']
	disabled?: boolean
}


const Button = ({text, onClick, type = 'button', disabled = false}: ButtonProps) => {
	return (
			<button
				className={style.button}
				type={type}
				onClick={onClick}
				disabled={disabled}
			>
				{text}
			</button>
	);
};


export default Button