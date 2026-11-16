import { useState } from "react";
import "../css/ProductHeader.css";
import ProductFilters from "./ProductFilters";
import BreadCrumb from "./common/Breadcrumb";

const ProductHeader = (props) => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <section className="product-header">
            <div className="product-nav">
                <BreadCrumb />

                <ul className="right-product-header">
                    <li>{props.totalProducts} items</li>
                    {/* <li onClick={() => setShowFilters(true)}><i class="fa-solid fa-sliders"></i> Filter</li> */}
                </ul>
            </div>

           {/* <ProductFilters  setShowFilter={setShowFilters} show={showFilters} /> */}
        </section>




    )
}
export default ProductHeader;