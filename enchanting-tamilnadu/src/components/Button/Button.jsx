import React from 'react';
import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({ label, className = " ", disabled = false, handleClick }) => {

  return (
    <button className={`${styles.button} ${className}`} disabled={disabled} onClick={handleClick}>{label}</button>
  )
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};
export default Button;