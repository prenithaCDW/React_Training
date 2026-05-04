import React from 'react'
import styles from "./ComingSoon.module.css";
import Header from "../../components/Header/Header.jsx";
const ComingSoon = ({ title }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{title} Page -ComingSoon</div>
    </>
  )
}

export default ComingSoon