import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import "../css/CartSection.css";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const CartSection = () => {
    const cart = getLocalStorage("cart") || [];
    const [cartItems,setCartItems] = useState([])

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
       const cartProducts=[]; 
       for(let i=0;i<cart.length;i++) {
          const product = await getProduct(cart[i].id);
          cartProducts.push({...product, count: cart[i].count});
        }
        setCartItems(cartProducts);
    
    } 

    const calProductTotal = (product) => {
        return (product.price * product.count).toFixed(2);
    }

    const manageQuantity = (action, product) => {
        const updatedLocalStorage = [];
        if(action == "minus"){
            if(product.count == 1) {
                handleDelete(product);
                return;
            }
            const newCart = cartItems.map(item => {
                if(product.id == item.id) {
                    item.count--;
                }
                updatedLocalStorage.push({id: item.id, count: item.count});
                return item;
            });
            setLocalStorage("cart", updatedLocalStorage);
            setCartItems(newCart);
        } else {
            const isALLowed = product.stock >= product.count+1;
            if(!isALLowed) {
                toast.error(`You can order maximum ${product.stock} items`);
                return;
            }
            const newCart = cartItems.map(item => {
                if(product.id == item.id){
                    item.count++;
                }
                updatedLocalStorage.push({id:item.id, count: item.count});
                return item;
            });
            setLocalStorage("cart", updatedLocalStorage);
            setCartItems(newCart);

        }
        

    }

    const handleDelete = (product) => {
            const newCart = cartItems.filter(item => item.id != product.id);
            setCartItems(newCart);
            const updatedLocalStorage = newCart.map(item => ({id: item.id, count: item.count}));
            setLocalStorage("cart", updatedLocalStorage);
    }

    useEffect(() => {
        initializeCart();
    },[])

    if(cartItems.length == 0) return <h2 id="empty-cart">No items to show</h2>


    return (
        <div className="cart-info-details">

            <h2>Your Cart ({cartItems.length})</h2>
                <div className="cart-cards">
                    {cartItems.map(itm => (

                    <div className="card">
                        <div className="card-img">
                            <img src= {itm.thumbnail} alt={itm.title} />
                        </div>
                        <div className="card-info">
                            <div className="card-heading">
                                <h3>{itm.title}</h3>
                                <i onClick={() => handleDelete(itm)} class="fa-solid fa-trash"></i>
                            </div>
                            <div className="card-price-button">
                                <h4>${itm.price}</h4>
                                <div className="select-quantity-btns">
                                    <button onClick={() => manageQuantity("minus", itm)} id="subtract-btn"><i class="fa-solid fa-minus"></i></button>
                                    <span>{itm.count}</span>
                                    <button onClick={() => manageQuantity("plus", itm)} id="add-btn"><i class="fa-solid fa-plus"></i></button>
                                </div>
                                <h4>${calProductTotal(itm)}</h4>

                            </div>
                        </div>
                    
                    </div>

                    ))}
                  
                   
                   
                    
                </div>


        </div>

    )
}
export default CartSection;