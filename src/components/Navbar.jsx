import { useSelector, useDispatch } from "react-redux"

const Navbar = () => {
 const {amount} = useSelector((state) => state.cart)

 return <nav>
    <div>
        <h3>Redux Cart</h3>
        <p>{amount}</p>
    </div>
 </nav>
}

export default Navbar