import {Route,Routes} from "react-router";
import Home from "./pages/home";
import ProductInfo from "./pages/ProductInfo";

function App() {
  return (
    <div className="main-container">
      
      <Routes>
         <Route path = "/" element={<Home />} />
         <Route path = "/product/:id" element ={<ProductInfo />} />
      </Routes>

    </div>
  )
}

export default App;