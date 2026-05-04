import React, { useState } from 'react';
import styles from './Promo.module.css';
import promo from "../../assets/cover.png";
import Button from '../Button/Button.jsx';
import { BUTTON } from '../../constants/button.js';
import Dropdown from '../Dropdown/Dropdown.jsx';
import { PROMO } from '../../constants/promo.js';
import { useNavigate } from "react-router-dom";
import { singlePlaces } from '../../services/exploreService.js';
import FallbackImage from '../FallbackImage/FallbackImage.jsx';
import PropTypes from 'prop-types';
const Promo = ({ places = [] }) => {
    const [placeSelected, setPlaceSelected] = useState(null);
    const navigate = useNavigate();

    return (
        <>
            <section className={styles.promoContainer}>
                <div className={styles.promoLeft}>
                    <p className={styles.promoWelcome}>{PROMO.welcome}</p>
                    <h1 className={styles.promoHeading}>{PROMO.heading.header} <span className={styles.promoHeadingHighlight} >{PROMO.heading.highlight}</span></h1>
                    <div className={styles.promoDropdownWrapper}>
                        <Dropdown placeholder='Choose' options={places} bg="#fff" handleChange={(e) => setPlaceSelected(e.target.value)} />
                    </div>

                    <Button label={BUTTON.explore} className={styles.promoButton} disabled={!placeSelected} handleClick={() => {
                        if (!placeSelected) return;
                        navigate(`/destination/${placeSelected}`);
                    }} />
                </div>

                <div className={styles.promoRight}>
                    <figure className={styles.promoRightImage}>
                        <FallbackImage src={promo} className={styles.promoImage} alt="Promo" />
                    </figure>
                </div>
            </section>
        </>
    )
}
Promo.propTypes = {
    places: PropTypes.arrayOf(PropTypes.string),
};

export default Promo;