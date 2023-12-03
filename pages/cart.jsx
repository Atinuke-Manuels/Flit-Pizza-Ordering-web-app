import styles from '@/styles/Cart.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                <thead  className={styles.tableHead}>
                    <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extra</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={styles.tableRow}>
                        <td>
                            <div className={styles.tableImg}>
                                <Image src={'/Image/sandWitch.jpg'} layout='fill' alt='pizza'/>
                            </div>
                        </td>
                        <td className={styles.name}><span>Chicken Pizza</span></td>
                        <td className={styles.extra}><span>Extra Spice</span></td>
                        <td className={styles.price}><span>$20</span></td>
                        <td className={styles.quantity}><span>3</span></td>
                        <td className={styles.total}><span>$60</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.div}><span className={styles.subtitle}>Subtotal:  </span><span className={styles.subPrice}>$160</span></div>
                    <div className={styles.div}><span className={styles.subtitle}>Discount: </span><span className={styles.subPrice}>$79.60</span></div>
                    <div className={styles.div}><span className={styles.subtitle}>Total: </span><span className={styles.subPrice}>$160</span></div>
                                <div className={styles.headerImgs}>
        <Link href="paymentPage"><button className={styles.button}>CHECKOUT NOW!</button></Link>
        </div>
                </div>
            </div>
        </div>
    )
}

export default Cart