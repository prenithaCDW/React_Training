import styles from "./Input.module.css";
import PropTypes from "prop-types";
const Input = ({ id, type = "text", placeholder = "", name = "", onChange }) => {
  return (
    <input id={id} type={type} name={name} className={styles.formWrapperInput} placeholder={placeholder} onChange={onChange}></input>
  )
}
Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
export default Input;