import { createContext, useContext, useMemo, useState } from "react";

export const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addCart = (product) => {
        setCartItems((prev) => {
            const exisitingProduct = prev.find((item) => item.id === product.id);
            if (exisitingProduct) {
                return prev.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                })
            };
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const decreaseQuantity = (id) => {
        setCartItems(prev => {
            return prev.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            }).filter(item => item.quantity > 0);
        });
    };

    const totalAmount = useMemo(() => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    }, [cartItems]);

    const clearCart=()=>{
        setCartItems([]);
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addCart,
                decreaseQuantity,
                clearCart,
                totalAmount,
            }}>
            {children}
        </CartContext.Provider>
    )
}