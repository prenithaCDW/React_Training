import React, { useState } from 'react';
import styles from "./Dropdown.module.css";
import { GoTriangleDown } from "react-icons/go";
import PropTypes from 'prop-types';
const Dropdown = ({ label, id, placeholder = "Choose", options = [], bg = "transparent", handleChange }) => {
    return (
        <div className={styles.dropdownWrapper}>
            <select id={id} className={styles.dropdown} style={{ background: bg }} defaultValue="" onChange={handleChange}>
                <option value="" hidden>
                    {placeholder}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <GoTriangleDown size={22} className={styles.dropdownIcon} />
        </div>

    )
}
Dropdown.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    bg: PropTypes.string,
    handleChange: PropTypes.func,
};
export default Dropdown;