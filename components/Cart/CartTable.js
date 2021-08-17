import React, {useState} from 'react';
import styles from './CartTable.module.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const CartTable = (props) => {
    
    const [orderItems, setOrderItems] = useState(props.orders)
    const incrementQuantity = () => {
        setQuantity(prevState => prevState + 1)
    }

    const decrementQuantity = () => {
        setQuantity(prevState => prevState - 1)
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
                                <RemoveIcon className={styles.incrementDecrementBtn} onClick={decrementQuantity} disabled={quantity === 1 ? true : false} style={{fontSize: 'medium'}}/>
                                <span style={{color: 'white'}}>{orderItem.quantity}</span>
                                <AddIcon className={styles.incrementDecrementBtn} onClick={incrementQuantity} style={{fontSize: 'medium'}}/>
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

