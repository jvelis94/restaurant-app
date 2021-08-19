import React, { useEffect, useMemo, useState, useCallback, useContext } from "react";
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

const OrderContext = React.createContext({
    currentOrder: {},
    orderItems: [],
    addToCart: (item) => {},
    incrementQuantity: (item) => {},
    decrementQuantity: (item) => {},
    removeCartItem: (item) => {}
});

// const defaultOrder = {
//     status: "open",
//     subtotal: 0,
//     tax: 0,
//     tip: 0,
//     total: 0,
//     orderItems: [],
//     user: 1
// }

export const OrderContextProvider = (props) => {
    const [currentOrder, setCurrentOrder] = useState({})
    const [orderItems, setOrderItems] = useState([])
    const [updateCart, setUpdateCart] = useState(false)

    useEffect(() => {
        fetch('/api/cart')
            .then(response => response.json())
            .then(data => {
                setCurrentOrder(data)
                setOrderItems(data.orderItems.map(orderItem => {
                    let orderObject = {
                        product: orderItem.product,
                        price: orderItem.product.price,
                        quantity: orderItem.quantity,
                        order: currentOrder
                    }
                    return orderObject
                }))
            })
        setUpdateCart(false)
        
    }, [updateCart])

    const addToCart = async (item) => {
        console.log(`adding ${item} to cart`)
        const orderItem = {
            product: item,
            quantity: 1,
            price: item.price,
            order: currentOrder
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
        let orderItem = orderItems.find(order => order['product']['id'] === item.product.id)
        orderItem['quantity'] += 1
        let updateIndex = orderItems.indexOf(item)
        setOrderItems(prevState => {
            prevState[updateIndex] = orderItem
            return [...prevState]
        })
    }

    const decrementQuantity = (item) => {
        let updateIndex = orderItems.indexOf(item)
        let orderItem = orderItems.find(order => order['product']['id'] === item.product.id)
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
        console.log(item)
        let newOrderArray = orderItems.filter(el => el !== item)
        setOrderItems([...newOrderArray])
    }


    return (
        <OrderContext.Provider
            value={{
                currentOrder: currentOrder,
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