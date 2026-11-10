import "../css/AddressForm.css";
const AddressForm = ({setForm}) => {
    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}));
    }

    return (
        <form>
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
                <input
                    type="text"
                    id="address"
                    name="address"
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
                        onChange={(e) => handleValueChange(e)}
                        required
                    />

                    <label htmlFor="state">
                        State <span>*</span>
                    </label>
                </div>
            </div>
            <div className="save-address">
                <input type="checkbox" id="saveAddress" name="saveAddress" required onChange={(e) => setForm(prev => ({...prev, [e.target.name]: e.target.checked}))} />
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
                <div className="standard-delivery">
                    <input type="radio" name="shippingMethod" id="standardDelivery" required value="standardDelivery" onChange={(e) => handleValueChange(e)} />
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
                    <input type="radio" name="shippingMethod" id="expressDelivery" required value="expressDelivery" onChange={(e) => handleValueChange(e)} />
                    <label htmlFor="expressDelivery">
                        <div>
                            <i class="fa-solid fa-bolt"></i>
                            <div>
                                <p>Express Delivery</p>
                                <small>1-2 business days</small>
                            </div>
                        </div>
                        <span>$2</span>
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
                    <input type="radio" name="paymentMethod" id="upiPayment" required value="upiPayment" onChange={(e) => handleValueChange(e)} />
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
                    <input type="radio" name="paymentMethod" id="codPayment" required value="codPayment" onChange={(e) => handleValueChange(e)} />
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