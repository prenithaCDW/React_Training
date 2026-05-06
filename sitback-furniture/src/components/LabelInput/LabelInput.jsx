import styles from './LabelInput.module.css'
const LabelInput = ({ labelName, htmlFor, children }) => {
  return (
    <>
      <label htmlFor={htmlFor} className={styles.formLabel}>{labelName}</label>
      {children}
    </>
  )
}

export default LabelInput;