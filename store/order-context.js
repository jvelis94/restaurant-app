import React, { useState } from "react";

const OrderContext = React.createContext({
    orders: [],
    addToCart: (item) => {}
});

export const OrderContextProvider = (props) => {
    const [orders, setOrders] = useState([
        {name: 'meatball sundae', price: 12, quantity: 1},
        {name: 'boneless wings', price: 12, quantity: 1},
        {name: 'pretzel pops', price: 12, quantity: 1}
    ])

    const addToCart = (item) => {
        setOrders((prevState) => [...prevState, {
            id: item.name,
            name: item.name,
            price: item.price
        }])
        console.log(orders)
    }

    return (
        <OrderContext.Provider
            value={{
                orders: orders,
                addToCart: addToCart
            }}
        >
            {props.children}
        </OrderContext.Provider>
    )

}

export default OrderContext