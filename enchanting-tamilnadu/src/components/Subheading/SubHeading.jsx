import React from 'react'
import styles from "./SubHeading.module.css";
import PropTypes from 'prop-types';
const SubHeading = ({ heading, content }) => {
    return (
        <>
            <h2 className={styles.subHeadingHeader}>{heading}</h2>
            <p className={styles.subHeadingContent}>{content}</p>
        </>
    )
}
SubHeading.propTypes = {
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
export default SubHeading;