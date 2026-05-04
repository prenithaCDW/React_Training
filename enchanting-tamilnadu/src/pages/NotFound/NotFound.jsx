import React from 'react'
import styles from './NotFound.module.css'
import Header from "../../components/Header/Header.jsx";
const NotFound = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>404-Page NotFound</div>
    </>
  )
}

export default NotFound