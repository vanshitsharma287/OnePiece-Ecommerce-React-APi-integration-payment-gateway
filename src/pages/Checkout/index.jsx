import AddressForm from "../../components/AddressForm";
import Header from "../../components/common/Header";
import CartSection from "../../components/CartSection";
import BreadCrumb from "../../components/common/Breadcrumb";
import "../../css/Checkout.css";

const Checkout = () => {
    return(
        <section className="checkout">
            <Header />
            <BreadCrumb />

            <div className="checkout-section">
                <div className="left-section">
                   <AddressForm />
                </div>

                <div className="right-section">
                    <CartSection mode="checkout" disable={true} />
                </div>
                
            </div>

        </section>
    )

}

export default Checkout;