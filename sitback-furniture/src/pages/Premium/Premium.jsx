import React from 'react'
import FallbackImage from '../../components/FallbackImage/FallbackImage';
import premium from "../../assets/premium.jpg";
import { PREMIUM } from '../../constants/premium';
import styles from "./Premium.module.css";
const Premium = () => {
  return (
    <>
      <div className={styles.premiumContainer}>
        <figure className={styles.imageContainer}>
          <FallbackImage src={premium} alt="Premium couches" className={styles.premiumImage} />
        </figure>

          <figcaption className={styles.overlay}>
            <h1 className={styles.premiumHeading}>{PREMIUM.heading}</h1>
            <p className={styles.premiumSubHeading}>{PREMIUM.subheading}</p>
          </figcaption>
      </div>
    </>
  )
}

export default Premium;