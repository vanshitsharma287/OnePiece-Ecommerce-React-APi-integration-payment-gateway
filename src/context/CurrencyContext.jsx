import { createContext, useEffect, useState } from "react";
import { convertDollarToEuro, convertDollarToRuppees } from "../utils/currency";
import { getLocalStorage } from "../utils/localStorage";

 export const CurrencyContext = createContext(null);

 export const CurrencyProvider = ({children}) => {
    const [currency , setCurrency] = useState(getLocalStorage("currency") || "dollar");

    const calculateAmount = (price) => {
        if(currency == "rupee"){
             return `₹ ${convertDollarToRuppees(price)}`;
        } else if(currency == "euro") {
            return `€ ${convertDollarToEuro(price)}`;
        } else {
            return `$ ${Number(price)?.toFixed(2)}`
        }
    
    }

    return <CurrencyContext.Provider value={{currency, setCurrency, calculateAmount}}>
        {children}
    </CurrencyContext.Provider>

}
