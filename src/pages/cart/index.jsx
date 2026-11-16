import CartSection from "../../components/CartSection";
import BreadCrumb from "../../components/common/Breadcrumb";
import Header from "../../components/common/Header";

const Cart = () => {
    return(
        <section className="cart-info">
            <Header />
            <BreadCrumb items={[{label: "Cart", to: "/cart", active: true}]}/>
            <CartSection />


        </section>
    )
}
export default Cart;