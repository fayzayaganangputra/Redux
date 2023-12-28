import Navbar from "./components/Navbar"
import CartContainer from "./components/cartContainer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { calculateAmountAndPriceTotal } from "./features/cartSlice"

function App() {
  const {cartItems} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateAmountAndPriceTotal())
  }, [cartItems])
  return <>
  <Navbar/>
  <CartContainer/>
  </>
}

export default App
