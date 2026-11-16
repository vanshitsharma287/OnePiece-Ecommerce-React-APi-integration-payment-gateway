import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
     setCartCount(getLocalStorage("cart")?.length || 0)
    }, []);

    return <CartContext.Provider value={{cartCount, setCartCount}}>
       {children}
    </CartContext.Provider>
}