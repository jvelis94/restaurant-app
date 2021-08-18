import { useContext } from "react"
import CartTable from "../components/Cart/CartTable"
import OrderContext from "../store/order-context"

const Cart = (props) => {
    const ctx = useContext(OrderContext)

    

    // const decrementQuantity = () => {
    //     setQuantity(prevState => prevState - 1)
    // }

    return (
        <CartTable orders={ctx.orders} />
    )
}

export default Cart
