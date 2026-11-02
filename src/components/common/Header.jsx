import { Link } from "react-router";
import "../../css/Header.css"

const Header = () => {

    return (
         <header>
           <nav>
            <ul className="nav-options">
                <li><Link to="/">SHOP</Link></li>
                <li>COLLECTION</li>
                <li>ABOUT</li>
            </ul>

            <h1>OnePiece</h1>

             <ul className="nav-icons">
                <li>
                    <select>
                        <option>US $</option>
                        <option>INR ₹</option>
                        <option>Euro €</option>
                    </select>
                </li>
                <li><i className="fa-solid fa-magnifying-glass"></i></li>
                <li><i className="fa-regular fa-user"></i></li>
                <li><i className="fa-solid fa-bag-shopping"></i> (2)</li>
            </ul>

            </nav> 

         </header>
         
    )
}
export default Header;