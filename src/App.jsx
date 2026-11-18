import {Route,Routes} from "react-router";
import Home from "./pages/home";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import Favourites from "./pages/Favourites";
import About from "./pages/About";

function App() {
  return (
    <div className="main-container">
      <Routes>
         <Route path = "/" element={<Home />} />
         <Route path = "/product/:id" element ={<ProductInfo />} />
         <Route path = "/cart" element ={<Cart />} />
         <Route path = "/checkout/:id?" element ={<Checkout />} />
         <Route path = "/favourites" element ={<Favourites />} />
         <Route path = "/about" element ={<About />} />
      </Routes>

    </div>
  )
}

export default App;