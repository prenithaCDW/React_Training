import React from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button.jsx";
import { BUTTON } from "../../constants/button.js";
import PropTypes from "prop-types";
const Card = ({ imageSrc, place, city, description, onReadMore }) => {
  return (
    <article className={styles.cardCards}>
      <figure className={styles.cardImageContainer}>
        <img src={imageSrc} alt={city} className={styles.cardImage} />
      </figure>

      <h3 className={styles.cardHeading}>{place}</h3>
      <p className={styles.cardCity}>{city}</p>
      <p className={styles.cardContent}>{description}</p>

      <Button label={BUTTON.readmore} handleClick={onReadMore} />
    </article>
  );
};
Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string,
  onReadMore: PropTypes.func,
};
export default Card;