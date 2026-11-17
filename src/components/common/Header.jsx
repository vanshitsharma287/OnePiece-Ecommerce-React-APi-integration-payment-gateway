import { Link } from "react-router";
import "../../css/Header.css"
import { useCart } from "../../hooks/useCart";
import { useCurrency } from "../../hooks/useCurrency";
import { setLocalStorage } from "../../utils/localStorage";
import { useEffect, useRef, useState } from "react";

const Header = ({ disabledSearch = true, setSearchValue, searchValue }) => {
    const searchRef = useRef(null);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useCart();
    const { currency, setCurrency } = useCurrency();

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
        setLocalStorage("currency", e.target.value);
    }

    useEffect(() => {
        if (showSearch) {
            searchRef.current?.focus();
        }
    }, [showSearch]);

    return (
        <header>
            <nav>
                <ul className="nav-options">
                    <li><Link to="/">SHOP</Link></li>
                    <li><Link to="/favourites">FAVOURITES</Link></li>
                    <li><Link>ABOUT</Link></li>
                </ul>

                <h1 onClick={() => window.location.href = "/"}>OnePiece</h1>

                <ul className="nav-icons">
                    <li>
                        {showSearch && <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} ref={searchRef} type="search" placeholder="Search" />}
                        {!showSearch && !disabledSearch && <i onClick={() => {
                            setShowSearch(true);
                        }} className="fa-solid fa-magnifying-glass"></i>}
                    </li>
                    <li><Link to="/cart"><i className="fa-solid fa-bag-shopping"></i> ({cartCount})</Link></li>
                    <li>
                        <select value={currency} onChange={(e) => handleCurrencyChange(e)}>
                            <option value="dollar">US $</option>
                            <option value="rupee">INR ₹</option>
                            <option value="euro">Euro €</option>
                        </select>
                    </li>
                </ul>

            </nav>

        </header>

    )
}
export default Header;