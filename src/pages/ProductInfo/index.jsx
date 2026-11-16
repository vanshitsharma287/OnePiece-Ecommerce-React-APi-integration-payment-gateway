import { useState } from "react";
import BreadCrumb from "../../components/common/Breadcrumb";
import Header from "../../components/common/Header";
import ProductInfoDetail from "../../components/ProductInfoDetail";

const ProductInfo = () => {
    const [breadCrumbItems, setBreadCrumbItems] = useState([]);
    return(
        <section className="product-info">
            <Header />
            <BreadCrumb items={breadCrumbItems} />
            <ProductInfoDetail setBreadCrumbItems={setBreadCrumbItems} />
        </section>

    )


}
export default ProductInfo;