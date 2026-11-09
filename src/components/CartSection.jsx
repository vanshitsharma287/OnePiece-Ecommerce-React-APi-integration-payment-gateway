import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import "../css/CartSection.css";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SHIPPING_CHARGE = 2;

const CartSection = ({ mode, disable }) => {
    const navigate = useNavigate();
    const cart = getLocalStorage("cart") || [];
    const [cartItems, setCartItems] = useState([])


    const getProduct = async (id) => {
        try {
            const result = await fetch(`https://dummyjson.com/products/${id}`);
            const jsonResult = await result.json();

            return jsonResult;

        } catch (error) {
            toast.error("Error while fetching cart product");
        }
    }

    const initializeCart = async () => {
        const cartProducts = [];
        for (let i = 0; i < cart.length; i++) {
            const product = await getProduct(cart[i].id);
            cartProducts.push({ ...product, count: cart[i].count });
        }
        setCartItems(cartProducts);

    }

    const calProductTotal = (product) => {
        return (product.price * product.count).toFixed(2);
    }

    const manageQuantity = (action, product) => {
        const updatedLocalStorage = [];
        if (action == "minus") {
            if (product.count == 1) {
                handleDelete(product);
                return;
            }
            const newCart = cartItems.map(item => {
                if (product.id == item.id) {
                    item.count--;
                }
                updatedLocalStorage.push({ id: item.id, count: item.count });
                return item;
            });
            setLocalStorage("cart", updatedLocalStorage);
            setCartItems(newCart);
        } else {
            const isALLowed = product.stock >= product.count + 1;
            if (!isALLowed) {
                toast.error(`You can order maximum ${product.stock} items`);
                return;
            }
            const newCart = cartItems.map(item => {
                if (product.id == item.id) {
                    item.count++;
                }
                updatedLocalStorage.push({ id: item.id, count: item.count });
                return item;
            });
            setLocalStorage("cart", updatedLocalStorage);
            setCartItems(newCart);

        }


    }

    const handleDelete = (product) => {
        const newCart = cartItems.filter(item => item.id != product.id);
        setCartItems(newCart);
        const updatedLocalStorage = newCart.map(item => ({ id: item.id, count: item.count }));
        setLocalStorage("cart", updatedLocalStorage);
    }


    useEffect(() => {
        initializeCart();
    }, [])

    if (cartItems.length == 0) return <h2 id="empty-cart">No items to show</h2>

    const subTotal = cartItems.reduce((sum, item) => {
        return sum + (item.price*item.count);
    }, 0).toFixed(2);
    const shipping = subTotal >= 50 ? 0 : SHIPPING_CHARGE;
    const total = (Number(subTotal) + shipping).toFixed(2);


    return (
        <div className="cart-info-details">
            {mode == "checkout" ? <h2>Order Summary</h2> : <h2>Your Cart ({cartItems.length})</h2>}
            
            <div className={`cart-info-section ${mode == "checkout" ? "checkout-layout" : ""}`}>

                <div className={`cart-cards ${mode == "checkout" ? "checkout-layout" : ""}`}>
                    {cartItems.map(itm => (

                        <div className="card">
                            <div className="card-img">
                                <img onClick={() => navigate(`/product/${itm.id}`)} src={itm.thumbnail} alt={itm.title} />
                            </div>
                            <div className="card-info">
                                <div className="card-heading">
                                    <h3 onClick={() => navigate(`/product/${itm.id}`)}>{itm.title}</h3>
                                    {!disable && <i onClick={() => handleDelete(itm)} class="fa-solid fa-trash"></i>}
                                </div>
                                <div className="card-price-button">
                                    <h4>${itm.price}</h4>
                                        <div className="select-quantity-btns">
                                            {!disable && <button onClick={() => manageQuantity("minus", itm)} id="subtract-btn"><i class="fa-solid fa-minus"></i></button>}
                                            <span>{itm.count}</span>
                                            {!disable && <button onClick={() => manageQuantity("plus", itm)} id="add-btn"><i class="fa-solid fa-plus"></i></button>}
                                        </div>
                                    <h4>${calProductTotal(itm)}</h4>

                                </div>
                            </div>

                        </div>

                    ))}




                </div>

                <div className={`cart-total ${mode == "checkout" ? "checkout-layout" : ""}`}>
                    <h2>Order Summary</h2>
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <h4>${subTotal}</h4>
                    </div>
                    <div className="shipping">
                        <p>Shipping</p>
                        <h4>{shipping === 0 ? <span style={{color:"green"}}>Free</span> : `$${shipping.toFixed(2)}`}</h4>
                    </div>
                    <hr />
                    <div className="total">
                        <h3>Total</h3>
                        <h3>${total}</h3>
                    </div>
                    <button onClick={() => navigate("/checkout")}>Proceed To Checkout</button>
                </div>
            </div>



        </div>

    )
}
export default CartSection;