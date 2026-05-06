import styles from "./Input.module.css";

const Input = ({ id, type = "text", placeholder = "", name = "", onChange }) => {
  return (
    <input id={id} type={type} name={name} className={styles.formInput} placeholder={placeholder} onChange={onChange}></input>
  )
}

export default Input;