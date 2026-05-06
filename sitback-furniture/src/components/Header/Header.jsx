import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { HEADER } from "../../constants/header";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
    const navigate = useNavigate();
    const { user, logoutOfUser } = useAuth();
    const [isProfileClicked, setIsProfileClicked] = useState(false);

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        logoutOfUser();
        setIsProfileClicked(false);
        navigate("/login");
    };

    return (
        <header className={styles.headerContainer}>
            <Link to="/categories/couch" className={styles.logoContainer}>
                <p>{HEADER.logoName}</p>
            </Link>

            <ul className={styles.linksContainer}>
                {HEADER.links.map((link) => (
                    <NavLink key={link.label} to={link.to} className={styles.links}>
                        {({ isActive }) => (
                            <span className={styles.linkText}>
                                {link.label}
                                {isActive && <span className={styles.underline} />}
                            </span>
                        )}
                    </NavLink>
                ))}
            </ul>

            <div className={styles.loginContainer}>
                {(!user) ? (
                    <p onClick={handleLoginClick}>{HEADER.login}</p>
                ) : (
                    <div onClick={() => setIsProfileClicked((p) => !p)}>
                        <p>{user.username}
                            <span className={`${styles.arrow} ${isProfileClicked ? styles.open : ""}`}>
                                ▼
                            </span>
                        </p>

                        {isProfileClicked && (
                            <div className={styles.dropdown}>
                                <p onClick={handleLogout}>{HEADER.logoutContent}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
