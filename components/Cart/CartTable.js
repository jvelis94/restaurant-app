import React, {useContext, useState} from 'react';
import styles from './CartTable.module.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import OrderContext from '../../store/order-context';

const CartTable = (props) => {
    const ctx = useContext(OrderContext)
    const [orderItems, setOrderItems] = useState(props.orders)

    const incrementQuantity = (item) => {
        ctx.incrementQuantity(item)
        // setQuantity(prevState => prevState + 1)
    }

    const decrementQuantity = (item) => {
        ctx.decrementQuantity(item)
        console.log(orderItems)
        // setQuantity(prevState => prevState - 1)
    }
    
    if (orderItems && orderItems.length < 1) {
        return (
            <h2>No items in your cart at this time</h2>
        )
    }


    return (
        <table className={styles.cartTable}>
            <thead>
                <tr>
                    <td className={styles.cartTableQtyColumns}>Qty</td>
                    <td className={styles.cartTableNameColumns}>Name</td>
                    <td className={styles.cartTablePriceColumns}>Price</td>
                </tr>
            </thead>
            <tbody>
                {orderItems.map(orderItem => (
                    <tr key={orderItem.name} >
                        <td className={styles.cartTableQtyColumns}>
                            <div className={styles.quantityControls}>
                                <RemoveIcon className={styles.incrementDecrementBtn} onClick={()=>decrementQuantity(orderItem)} color={orderItem.quantity === 1 ? 'disabled' : 'inherit'} style={{fontSize: 'medium'}}/>
                                <span style={{color: 'white'}}>{orderItem.quantity}</span>
                                <AddIcon className={styles.incrementDecrementBtn} onClick={()=>incrementQuantity(orderItem)} style={{fontSize: 'medium'}}/>
                            </div>
                        </td>
                        <td className={styles.cartTableNameColumns}>{orderItem.name}</td>
                        <td className={styles.cartTablePriceColumns}>{orderItem.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CartTable

