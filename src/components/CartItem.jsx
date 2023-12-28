import { ChevronUp, ChevronDown } from "react-feather";
import { decrease, increas, removeItem } from "../features/cartSlice";
import { useDispatch } from "react-redux";



const CartItem = ({id, title, amount, img, price}) => {
    
const dispatch = useDispatch();
    return (
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">{price}</h4>
          <button
            className="remove-button"
            onClick={() => dispatch(removeItem(id))}
          >
            remove
          </button>
        </div>

        <div>
          <button className="amount-btn" onClick={() => dispatch(increas(id))}>
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn" onClick={() => {
            if (amount <1){
                dispatch(removeItem(id))
                return;
            
          }dispatch(decrease(id))}}>
            <ChevronDown />
          </button>
        </div>
      </article>
    );
}

export default CartItem;