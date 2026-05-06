import { SiAdguard } from "react-icons/si";
import Button from "../Button/Button.jsx";
import FallbackImage from "../FallbackImage/FallbackImage";
import { CARD } from "../../constants/card.js";
import { SYMBOL } from "../../constants/symbol.js";
import {BUTTON} from "../../constants/button.js"
import styles from "./Card.module.css";
import { useCart } from "../../hooks/useCart.js";

const Card = ({ id, imgSrc, name, count, price, desc, guaranteeYear, variant = CARD.showCaseVariant, }) => {
    const { cartItems,addCart } = useCart();
    return (
        <article className={styles.cardContainer}>
            <figure className={styles.cardImage}>
                <FallbackImage src={imgSrc} alt={name} />
            </figure>

            <div className={styles.cardHeading}>
                <p className={styles.cardName}>{name}</p>
                <p className={styles.cardPrice}>
                    {SYMBOL.rupee} {price.toLocaleString()}
                </p>
            </div>

            {variant === CARD.confirmShowCaseVariant && (
                <p className={styles.cardQuantity}>
                    {CARD.quantity} {count}
                </p>
            )}

            <p className={styles.cardContent}>{desc}</p>

            {variant === CARD.showCaseVariant && (
                <>
                    <div className={styles.cardGuarantee}>
                        <SiAdguard
                            color={CARD.badgeColor}
                            size={CARD.badgeSize}
                        />
                        {guaranteeYear} {CARD.guarantee}
                    </div>

                    <div className={styles.cardLine}></div>

                    <div className={styles.cardButton}>
                        <Button onClick={() => addCart({ id, name, price, img: imgSrc ,desc })}>
                            {BUTTON.addtoCart}
                        </Button>
                    </div>
                </>
            )}
        </article>
    );
};

export default Card;
