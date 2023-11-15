import styles from '@/styles/PizzaCard.module.css'
import Image from 'next/image'

const PizzaCard = () => {
    return(
        <div className={styles.container}>
        <Image src={'/Image/sandWitch.jpg'} alt='burger' width="250" height="250" className={styles.pizzaImg}/>
        <div className={styles.span}>
        <span className={styles.title}>Burger Pizza </span><span className={styles.price}>$20</span></div>
        <Image src={'/Image/rating.jpg'} alt='rating' width={80} height={40}/>
        <p className={styles.desc}>This is burger pizza</p>
        <div className={styles.headerImgs}>
        <Image src={'/Image/cart.png'} width={15} height={15} className={styles.cartBtn}/>
        <button className={styles.button}>ORDER NOW</button>
        </div>
        </div>
    )
}

export default PizzaCard