import { useEffect } from "react";
import { DELIVERY_CHARGE } from "../constants/cartConstants";
import "../css/AddressForm.css";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { useCurrency } from "../hooks/useCurrency";
const AddressForm = ({ setForm, form, formRef, setShowOrderPlaced }) => {
    const  {calculateAmount} = useCurrency();
    const handleValueChange = (e) => {
        const { name, value } = e.target;
        if (name == "phoneNumber" || name == "pinCode") {
            const regex = /^[0-9]*$/
            if (!regex.test(value)) return;
        }
        if (name == "fullName" || name == "city" || name == "state") {
            const regex = /^[a-zA-Z\s]*$/;
            if (!regex.test(value)) return;
        }

        setForm(prev => ({ ...prev, [name]: value }));
    }


    useEffect(() => {
        const savedAddress = getLocalStorage("address");
        if (savedAddress) {
            setForm(prev => ({ ...prev, ...savedAddress }));
        }
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.saveAddress == true) {
            setLocalStorage("address", { fullName: form.fullName, phoneNumber: form.phoneNumber, pinCode: form.pinCode, address: form.address, city: form.city, state: form.state, saveAddress: true });
        }
        setShowOrderPlaced(true);
        localStorage.removeItem("cart");
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-heading">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                    <h4>Shipping Address</h4>
                    <small>Enter your address details</small>
                </div>
            </div>
            <div className="form-group">
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    maxLength="50"
                    value={form.fullName}
                    onChange={(e) => handleValueChange(e)}
                    required
                />

                <label htmlFor="fullName">
                    Full Name <span>*</span>
                </label>
            </div>

            <div className="number-pincode">
                <div className="form-group">
                    <input
                        type="tel"
                        name="phoneNumber"
                        inputMode="numeric"
                        id="phoneNumber"
                        value={form.phoneNumber}
                        pattern="[0-9]{10}"
                        maxLength="10"
                        onChange={(e) => handleValueChange(e)}
                        required
                    />

                    <label htmlFor="phoneNumber">
                        Phone Number <span>*</span>
                    </label>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="pinCode"
                        id="pincode"
                        value={form.pinCode}
                        inputMode="numeric"
                        pattern="[0-9]{6}"
                        maxLength="6"
                        onChange={(e) => handleValueChange(e)}
                        required
                    />

                    <label htmlFor="pincode">
                        Pincode <span>*</span>
                    </label>
                </div>
            </div>
            <div className="form-group">
                <textarea
                    id="address"
                    name="address"
                    maxLength="120"
                    value={form.address}
                    onChange={(e) => handleValueChange(e)}
                    required
                />

                <label htmlFor="address">
                    Address <span>*</span>
                </label>
            </div>
            <div className="city-state">
                <div className="form-group">
                    <input
                        type="text"
                        id="city"
                        name="city"
                        maxLength="30"
                        value={form.city}
                        onChange={(e) => handleValueChange(e)}
                        required
                    />

                    <label htmlFor="city">
                        City <span>*</span>
                    </label>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={form.state}
                        maxLength="30"
                        onChange={(e) => handleValueChange(e)}
                        required
                    />

                    <label htmlFor="state">
                        State <span>*</span>
                    </label>
                </div>
            </div>
            <div className="save-address">
                <input type="checkbox" id="saveAddress" checked={form.saveAddress} name="saveAddress" onChange={(e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.checked }))} />
                <label htmlFor="saveAddress">Save this address for next time</label>
            </div>
            <hr />

            <div className="shipping-method-heading">
                <i class="fa-solid fa-truck"></i>
                <div>
                    <h4>Shipping Method</h4>
                    <small>choose your delivery option</small>
                </div>
            </div>
            <div className="shipping-methods">
                <div className="standard-delivery" onChange={(e) => handleValueChange(e)}>
                    <input type="radio" name="shippingMethod" id="standardDelivery" required value="standardDelivery" checked={form.shippingMethod == "standardDelivery"} onChange={(e) => handleValueChange(e)} />
                    <label htmlFor="standardDelivery">
                        <div>
                            <i class="fa-solid fa-truck-fast"></i>
                            <div>
                                <p>Standard Delivery</p>
                                <small>3-5 business days</small>
                            </div>
                        </div>
                        <span id='free'>Free</span>
                    </label>

                </div>
                <div className="express-delivery">
                    <input type="radio" name="shippingMethod" id="expressDelivery" required value="expressDelivery" checked={form.shippingMethod == "expressDelivery"} onChange={(e) => handleValueChange(e)} />
                    <label htmlFor="expressDelivery">
                        <div>
                            <i class="fa-solid fa-bolt"></i>
                            <div>
                                <p>Express Delivery</p>
                                <small>1-2 business days</small>
                            </div>
                        </div>
                        <span>{calculateAmount(DELIVERY_CHARGE)}</span>
                    </label>
                </div>
            </div>

            <div className="payment-method-heading">
                <i class="fa-solid fa-credit-card"></i>
                <div>
                    <h4>Payment Method</h4>
                    <small>choose your payment option</small>
                </div>
            </div>

            <div className="payment-methods">
                <div className="upi-payment">
                    <input type="radio" name="paymentMethod" id="upiPayment" checked={form.paymentMethod == "upiPayment"} required value="upiPayment" onChange={(e) => handleValueChange(e)} />
                    <label htmlFor="upiPayment">
                        <div>
                            <i class="fa-solid fa-mobile-alt"></i>
                            <div>
                                <p>UPI Payment</p>
                                <small>3-5 business days</small>
                            </div>
                        </div>
                    </label>

                </div>
                <div className="cod-payment">
                    <input
                        type="radio"
                        name="paymentMethod"
                        id="codPayment"
                        checked={form.paymentMethod == "codPayment"}
                        required
                        value="codPayment"
                        onChange={(e) => handleValueChange(e)}
                    />
                    <label htmlFor="codPayment">
                        <div>
                            <i class="fa-solid fa-money-bill-wave"></i>
                            <div>
                                <p>Cash on Delivery</p>
                                <small>1-2 business days</small>
                            </div>
                        </div>
                    </label>
                </div>
            </div>


        </form>
    )
}
export default AddressForm;