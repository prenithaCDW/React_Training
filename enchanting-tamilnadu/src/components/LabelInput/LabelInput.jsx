import React from 'react'
import styles from './LabelInput.module.css';
import PropTypes from 'prop-types';
const LabelInput = ({ labelName, htmlFor, children }) => {
  return (
    <>
      <label htmlFor={htmlFor} className={styles.formWrapperLabel}>{labelName}</label>
      {children}
    </>
  )
}
LabelInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default LabelInput;