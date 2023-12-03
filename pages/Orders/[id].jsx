import styles from '@/styles/Orders.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Orders = () => {
const status = 0;

const classStatus = (index) => {
    if(status-index < 1) return styles.done
    if(status-index === 1) return styles.inProgress
    if(status-index > 1) return styles.undone
}

    return(
        <div   className = {styles.container}>
        <div   className = {styles.left}>
        <table className = {styles.table}>
        <thead className = {styles.tableHead}>
                    <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className = {styles.tableRow}>
                    <td className = {styles.extra}><span>6553e94e699e1964952785a2</span></td>
                    <td className = {styles.price}><span>08162628391</span></td>
                    <td className = {styles.quantity}><span>10 John Street</span></td>
                    <td className = {styles.total}><span>$160</span></td>
                    </tr>
                    </tbody>
                </table>
                            <div className = {styles.imageRow}>
                <div>
                    <div   className = {styles.done}>
                    <Image src       = {'/Image/order_1.png'} alt = 'payment' width = {40} height = {40} className = {styles.icons}/>
                        </div>
                        <small>Payment</small>
                        <div>
                        <Image src = {'/Image/checkedIcon.png'} alt = 'checkedIcon' width = {30} height = {30}/>
                        </div>
                </div>
                 <div>
                    <div   className = {styles.inProgress}>
                    <Image src       = {'/Image/order_2.png'} alt = 'payment' width = {40} height = {40} className = {styles.icons}/>
                        </div>
                        <small>Preparing</small>
                        {/* <div className={styles.checked}>
                        <Image src = {'/Image/checkedIcon.png'} alt = 'checkedIcon' width = {30} height = {30}/>
                        </div> */}
                </div>
                 <div>
                    <div   className = {styles.undone}>
                    <Image src       = {'/Image/order_3.png'} alt = 'payment' width = {40} height = {40} className = {styles.icons}/>
                        </div>
                        <small>On the way</small>
                        {/* <div className={styles.checked}>
                        <Image src = {'/Image/checkedIcon.png'} alt = 'checkedIcon' width = {30} height = {30}/>
                        </div> */}
                </div>
                 <div>
                    <div   className = {styles.undone}>
                    <Image src       = {'/Image/order_3.png'} alt = 'payment' width = {40} height = {40} className = {styles.icons}/>
                        </div>
                        <small>On the way</small>
                        {/* <div className={styles.checked}>
                        <Image src = {'/Image/checkedIcon.png'} alt = 'checkedIcon' width = {30} height = {30}/>
                        </div> */}
                </div>
            </div>
            </div>
        <div  className = {styles.right}>
        <div  className = {styles.wrapper}>
        <h2   className = {styles.title}>CART TOTAL</h2>
        <div  className = {styles.div}><span className    = {styles.subtitle}>Subtotal:  </span><span className = {styles.subPrice}>$160</span></div>
        <div  className = {styles.div}><span className    = {styles.subtitle}>Discount: </span><span className  = {styles.subPrice}>$79.60</span></div>
        <div  className = {styles.div}><span className    = {styles.subtitle}>Total: </span><span className     = {styles.subPrice}>$160</span></div>
        <div  className = {styles.headerImgs}>
        <Link href      = "paymentPage"><button className = {styles.button}>PAID</button></Link>
        </div>
                </div>
            </div>
        </div>
    )
}

export default Orders