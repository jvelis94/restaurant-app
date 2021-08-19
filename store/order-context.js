import React, { useEffect, useMemo, useState, useCallback } from "react";

const OrderContext = React.createContext({
    order: {},
    orderItems: [],
    addToCart: (item) => {},
    incrementQuantity: (item) => {},
    decrementQuantity: (item) => {},
    removeCartItem: (item) => {}
});

const defaultOrder = {
    status: "open",
    subtotal: 0,
    tax: 0,
    tip: 0,
    total: 0,
    orderItems: [],
    user: 1
}

export const OrderContextProvider = (props) => {
    const [order, setOrder] = useState(defaultOrder)
    const [orderItems, setOrderItems] = useState([])

    const addToCart = async (item) => {
        // console.log(orderItems)
        const orderItem = {
            product: item,
            quantity: 1,
            order: order
        }
        
        setOrderItems((prevState) => [...prevState, orderItem])

        try {
            const body = orderItem
            await fetch("/api/cart", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
        } catch (error) {
            console.error(error)
      }
    }
    
    const incrementQuantity = (item) => {
        console.log(orderItems)
        let orderItem = orderItems.find(order => order['name'] === item.name)
        orderItem['quantity'] += 1
        let updateIndex = orderItems.indexOf(item)
        setOrderItems(prevState => {
            prevState[updateIndex] = orderItem
            return [...prevState]
        })
    }

    const decrementQuantity = (item) => {
        let updateIndex = orderItems.indexOf(item)
        let orderItem = orderItems.find(order => order['name'] === item.name)
        if (orderItem['quantity'] === 1) {
            removeCartItem(item)
        }
        else {
            orderItem['quantity'] -= 1
            setOrderItems(prevState => {
                prevState[updateIndex] = orderItem
                return [...prevState]
            })
        }
    }
    
    const removeCartItem = (item) => {
        let newOrderArray = orderItems.filter(el => el !== item)
        setOrderItems([...newOrderArray])
    }


    return (
        <OrderContext.Provider
            value={{
                order: order,
                orderItems: orderItems,
                addToCart: addToCart,
                incrementQuantity: incrementQuantity,
                decrementQuantity: decrementQuantity,
                removeCartItem: removeCartItem,
            }}
        >
            {props.children}
        </OrderContext.Provider>
    )

}

export default OrderContext