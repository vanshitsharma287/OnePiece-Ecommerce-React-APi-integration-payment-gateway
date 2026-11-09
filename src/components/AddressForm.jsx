import "../css/AddressForm.css";
const AddressForm = () => {
    return (
        <form>
            <div className="form-group">
                <input
                    type="text"
                    id="fullName"
                />

                <label htmlFor="fullName">
                    Full Name <span>*</span>
                </label>
            </div>

            <div className="number-pincode">
                <div className="form-group">
                    <input
                        type="tel"
                        inputMode="numeric"
                        id="phoneNumber"
                        pattern="[0-9]{10}"
                        maxLength="10"
                    />

                    <label htmlFor="phoneNumber">
                        Phone Number <span>*</span>
                    </label>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="pincode"
                        inputMode="numeric"
                        pattern="[0-9]{6}"
                        maxLength="6"
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
                    />

                    <label htmlFor="city">
                        City <span>*</span>
                    </label>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="state"
                    />

                    <label htmlFor="state">
                        State <span>*</span>
                    </label>
                </div>
            </div>
           <div className="save-address">
                <input type="checkbox"/>
                <label>Save this address for next time</label>
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
                    <input type="radio" name="shippingMethod" id="standardDelivery" value="standardDelivery" />
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
                   <input type="radio" name="shippingMethod" id="expressDelivery" value="expressDelivery" />
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
                    <input type="radio" name="paymentMethod" id="upiPayment" value="upiPayment" />
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
                   <input type="radio" name="paymentMethod" id="codPayment" value="codPayment" />
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