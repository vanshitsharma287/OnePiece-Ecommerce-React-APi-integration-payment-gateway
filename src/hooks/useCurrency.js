import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export const useCurrency = () => {
    const currencyContext = useContext(CurrencyContext);
    return currencyContext;
}
