import styles from "./Button.module.css";

const Button = ({type = "button", onClick = () => {}, disabled = false, children,...rest}) => {
	return (
		<button className={styles.button} type={type} onClick={onClick} disabled={disabled} {...rest}>
			{children}
		</button>
	);
};

export default Button;