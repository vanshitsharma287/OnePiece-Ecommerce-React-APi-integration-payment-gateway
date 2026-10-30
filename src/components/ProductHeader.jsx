import { useState } from "react";
import "../css/ProductHeader.css";
import ProductFilters from "./ProductFilters";
import BreadCrumb from "./common/Breadcrumb";

const ProductHeader = () => {
    const [showFilters, setShowFilters] = useState(false);
    return (
        <section className="product-header">
            <div className="product-nav">
                <BreadCrumb />

                <ul className="right-product-header">
                    <li>120 items</li>
                    <li onClick={() => setShowFilters(true)}><i class="fa-solid fa-sliders"></i> Filter</li>
                </ul>
            </div>

           <ProductFilters  setShowFilter={setShowFilters} show={showFilters} />
        </section>




    )
}
export default ProductHeader;