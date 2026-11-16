import AddressForm from "../../components/AddressForm";
import Header from "../../components/common/Header";
import CartSection from "../../components/CartSection";
import OrderPlaced from "../../components/OrderPlaced";
import "../../css/Checkout.css";
import { useRef, useState } from "react";
import BreadCrumb from "../../components/common/Breadcrumb";

const Checkout = () => {
    const formRef = useRef(null);
    const [showOrderPlaced, setShowOrderPlaced] = useState(false);
    const [form, setForm] = useState({
        "fullName": "",
        "phoneNumber": "",
        "pinCode": "",
        "address": "",
        "city": "",
        "state": "",
        "saveAddress": false,
        "shippingMethod": "standardDelivery",
        "paymentMethod": ""
    });

    if(showOrderPlaced) return <OrderPlaced />


    return (
        <section className="checkout">
            <Header />

            <BreadCrumb items={[{label: "Cart", to: "/cart"}, {label: "Checkout", to: "/checkout", active:true}]}/>


            <div className="checkout-section">
                <div className="left-section">
                    <AddressForm setForm={setForm} form={form} formRef={formRef} setShowOrderPlaced={setShowOrderPlaced} />
                </div>

                <div className="right-section">
                    <CartSection mode="checkout" disable={true} handleFormSubmit={() => formRef.current.requestSubmit()} shippingMethod={form.shippingMethod} />
                </div>

            </div>

        </section>
    )

}

export default Checkout;