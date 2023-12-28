import { useSelector, useDispatch} from "react-redux"
import CartItem from "./CartItem";
import { clearCart } from "../features/cartSlice";

const CartContainer = () => {
    const {cartItems, priceTotal, amount} = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    

    if (amount < 1) {
        return ( 
        <section className="cart">
            <h2>Your Bag</h2>
            <h4 className="empty-cart">Is Empty</h4>
        </section>
        );
    }
    
    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                  return (
                    <CartItem key={item.id} {...item}/>
                  );
                })}
            </div>

            <footer>
                <hr />
                <div className="cart-total">
                    <h4>Total <span>${priceTotal}</span></h4>
                    <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </div>
            </footer>
        </section>
)
}

export default CartContainer;