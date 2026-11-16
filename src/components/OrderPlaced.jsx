import { useEffect } from "react";
import "../css/OrderPlaced.css";
import { useNavigate } from "react-router";
const OrderPlaced = () => {
   const navigate = useNavigate();

   useEffect(() => {
    setTimeout(() => {
       navigate("/", {replace: true});
    }, 5000);
   }, []);

   return <div className="order-placed">
      <i class="fa-solid fa-circle-check"></i>
      <h2>Order Placed Successfully</h2>
      <p>Thank you for your order! Your order has been placed successfully and is being processed. You will receive a confirmation email shortly with the details of your order.</p>
      <small>Order Placed : {new Date().toLocaleString()}</small>
      
   </div>
}
export default OrderPlaced;