import React, { useState } from "react";

const OrderContext = React.createContext({
    orders: [],
    addToCart: (item) => {},
    incrementQuantity: (item) => {},
    decrementQuantity: (item) => {}
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
    
    const incrementQuantity = (item) => {
        console.log(orders)
        let orderItem = orders.find(order => order['name'] === item.name)
        orderItem['quantity'] += 1
        let updateIndex = orders.indexOf(item)
        setOrders(prevState => {
            prevState[updateIndex] = orderItem
            return [...prevState]
        })
    }

    const decrementQuantity = (item) => {
        let updateIndex = orders.indexOf(item)
        let orderItem = orders.find(order => order['name'] === item.name)
        if (orderItem['quantity'] !== 1) {
            orderItem['quantity'] -= 1
            setOrders(prevState => {
                prevState[updateIndex] = orderItem
                return [...prevState]
            })
        }
    }

    return (
        <OrderContext.Provider
            value={{
                orders: orders,
                addToCart: addToCart,
                incrementQuantity: incrementQuantity,
                decrementQuantity: decrementQuantity
            }}
        >
            {props.children}
        </OrderContext.Provider>
    )

}

export default OrderContext