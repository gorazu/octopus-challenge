import React, { createContext, ReactNode, useContext, useRef, useState } from 'react';

interface CartContextType {
    cartProductQuantity: number;
    setCartProductQuantity: (quantity: number) => void;
}

const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartProductQuantity, setCartProductQuantity] = useState(0);

    return (
        <CartContext.Provider
            value={{
                cartProductQuantity,
                setCartProductQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
