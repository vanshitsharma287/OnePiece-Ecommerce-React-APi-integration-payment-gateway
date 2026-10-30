import BreadCrumb from "../../components/common/Breadcrumb";
import Header from "../../components/common/Header";
import ProductInfoDetail from "../../components/ProductInfoDetail";

const ProductInfo = () => {

    return(
        <section className="product-info">
            <Header />
            <BreadCrumb />
            <ProductInfoDetail />
        </section>

    )


}
export default ProductInfo;