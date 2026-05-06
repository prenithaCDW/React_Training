import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";
import FallbackImage from '../FallbackImage/FallbackImage.jsx';
import { SYMBOL } from '../../constants/symbol.js';
import { BUTTON } from '../../constants/button.js';
import { CART } from '../../constants/cart.js';
import { useCart } from '../../hooks/useCart.js';
import styles from "./Cart.module.css";
const Cart = ({ id, img, name, price, quantity }) => {
    const navigate = useNavigate();
    const { cartItems, totalAmount,addCart, decreaseQuantity } = useCart();
    return (
        <>
            <article className={styles.cartContainer}>
                <h3 className={styles.cartHeading}>{CART.heading}</h3>

                <div className={styles.cartItemContainer}>
                    {cartItems.map(item => (
                        <article key={item.id} className={styles.cartItemCard}>
                            <figure className={styles.cartItemImageContainer}>
                                <FallbackImage src={item.img} alt={item.name} />
                            </figure>

                            <div className={styles.cartItemContent}>
                                <p className={styles.cartItemName}>{item.name}</p>
                                <p className={styles.cartItemPrice}>
                                    {SYMBOL.rupee} {item.price.toLocaleString()}
                                </p>

                                <section className={styles.countContainer}>
                                    <Button onClick={() => decreaseQuantity(item.id)}>
                                        <span className={styles.countMinus}>{BUTTON.minus}</span>
                                    </Button>

                                    <span className={styles.count}>{item.quantity}</span>

                                    <Button onClick={() => addCart(item)}>
                                        <span className={styles.countPlus}>{BUTTON.plus}</span>
                                    </Button>
                                </section>
                            </div>
                        </article>
                    ))}
                </div>
            </article>


            <section className={styles.checkoutContainer}>
                {/* total amount */}
                <div className={styles.amountContainer}>
                    <div className={styles.totalAmountLabel}>
                        {CART.total}
                    </div>
                    <div className={styles.totalAmount}>
                        {SYMBOL.rupee} {totalAmount.toLocaleString()}
                    </div>
                </div>

                <Button onClick={() => navigate("/confirmOrder")}>
                    {BUTTON.placeorder}
                </Button>
            </section>
        </>
    )
}

export default Cart;
