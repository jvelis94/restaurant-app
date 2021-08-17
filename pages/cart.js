import CartTable from "../components/Cart/CartTable"

const Cart = (props) => {
    return (
        <CartTable orders={props.orders}/>
    )
}

export default Cart

