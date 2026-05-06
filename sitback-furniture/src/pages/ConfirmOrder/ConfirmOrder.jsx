import React, { useState } from 'react'
import FallbackImage from '../../components/FallbackImage/FallbackImage.jsx';
import Card from '../../components/Card/Card.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import { useCart } from '../../hooks/useCart.js';
import { SYMBOL } from '../../constants/symbol.js';
import { CONFIRM_ORDER } from '../../constants/confirm.js';
import { CARD } from '../../constants/card.js';
import styles from "./ConfirmOrder.module.css";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"

const ConfirmOrder = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const {  user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/categories/couch");
    }
  }, []);

  useEffect(() => {
    return () => clearCart();
  }, []);

  return (
    <>
      <section className={styles.confirmContainer}>
        <h2 className={styles.confirmHeading}>{CONFIRM_ORDER.heading}</h2>
        <p className={styles.confirmMessage}>{(user) && user?.username ? CONFIRM_ORDER.messageLoggedIn(user.username) : CONFIRM_ORDER.messageGuest}</p>

        <div className={styles.confirmItemsGrid}>
          {cartItems.map(item => (
            <Card
              key={item.id}
              id={item.id}
              imgSrc={item.img}
              name={item.name}
              price={item.price}
              count={item.quantity}
              desc={item.desc}
              variant={CARD.confirmShowCaseVariant}
            />
          ))}
        </div>

        <div className={styles.totalContainer}>
          <p className={styles.totalLabel}>{CONFIRM_ORDER.total}</p>
          <p className={styles.totalAmount}>₹ {totalAmount.toLocaleString()}</p>
        </div>

      </section>
    </>
  )
}

export default ConfirmOrder;