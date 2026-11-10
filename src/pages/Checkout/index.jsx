import AddressForm from "../../components/AddressForm";
import Header from "../../components/common/Header";
import CartSection from "../../components/CartSection";
import BreadCrumb from "../../components/common/Breadcrumb";
import "../../css/Checkout.css";
import { useState } from "react";

const Checkout = () => {
    const [form, setForm] = useState({
        "fullName": "",
        "phoneNumber": "",
        "pinCode": "",
        "address": "",
        "city": "",
        "state": "",
        "saveAddress": false,
        "shippingMethod": "",
        "paymentMethod": ""
    });
    return(
        <section className="checkout">
            <Header />
            

            <div className="checkout-section">
                <div className="left-section">
                   <AddressForm  setForm={setForm} />
                </div>

                <div className="right-section">
                    <CartSection mode="checkout" disable={true} />
                </div>
                
            </div>

        </section>
    )

}

export default Checkout;