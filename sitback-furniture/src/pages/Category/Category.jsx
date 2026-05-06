import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Category.module.css";
import Loading from "../../components/Loading/Loading.jsx";
import { getProductsByCategory } from "../../services/products.js";
import Card from "../../components/Card/Card.jsx";
import { useCart } from "../../hooks/useCart.js";
import Cart from "../../components/Cart/Cart.jsx";
const Category = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cartItems } = useCart();
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const response = await getProductsByCategory(category);
            setProducts(response);
            setLoading(false);
        };
        fetchProducts();
    }, [category]);

    if (loading) {
        return (
            <>
                <div className={styles.loadingWrapper}>
                    <Loading />
                </div>
            </>
        );
    }

    return (
        <>
            <section className={styles.categoryContainer}>
                <div className={`${styles.cardGrid} ${cartItems.length > 0 ? styles.withCart : ""}`}>
                    {products.map((item) => (
                        <div className={styles.card} key={item.id}>
                            <Card
                                id={item.id}
                                imgSrc={item.image}
                                name={item.name}
                                price={item.price}
                                desc={item.description}
                                guaranteeYear={item.guarantee}
                            />
                        </div>
                    ))}
                </div>
                  {cartItems.length > 0 && <Cart />}
            </section>
        </>
    );
};

export default Category;