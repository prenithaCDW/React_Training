import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { HEADER_LINKS } from '../../constants/headerLink.js';
import FallbackImage from '../FallbackImage/FallbackImage.jsx'
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <figure className={styles.logoContainer}>
        <Link to="/">
          <FallbackImage src={logo} className={styles.logoImage} alt="Logo" />
        </Link>
      </figure>

      <ul className={styles.headerLinks}>
        {HEADER_LINKS.map(({ label, path }) => (
          <li key={path} className={styles.headerLink}>
            <Link to={path} className={styles.headerLinkTag}>{label}</Link>
          </li>
        ))}

      </ul>
    </header>
  );
};

export default Header;