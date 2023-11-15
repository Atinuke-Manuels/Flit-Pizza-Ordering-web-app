import styles from '@/styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return(
        <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.card}>
                <h5 className={styles.title}>INFORMATION</h5>
                <ul className={styles.info}>
                    <li>Home</li><br/>
                    <li>Blog</li> <br/>
                    <li>About Us</li><br/>
                    <li>Menu</li><br/>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={styles.card}>
                <h5 className={styles.title}>TOP ITEMS</h5>
                <ul className={styles.info}>
                    <li>Pepperoni</li><br/>
                    <li>Swiss Mushroom</li> <br/>
                    <li>Barbeque Chicken</li><br/>
                    <li>Vegetarian</li><br/>
                    <li>Ham & Cheese</li>
                </ul>
            </div>
            <div className={styles.card}>
                <h5 className={styles.title}>OTHERS</h5>
                <ul className={styles.info}>
                    <li>Checkout</li><br/>
                    <li>Cart</li> <br/>
                    <li>Product</li><br/>
                    <li>Locations</li><br/>
                    <li>Legal</li>
                </ul>
            </div>
            <div className={styles.card}>
                <h5 className={styles.title}>SOCIAL MEDIA</h5>
                <div className={styles.socials}>
                    <Image src={'/Image/facebook.png'} alt='facebook' width={35} height={35}/>
                    <Image src={'/Image/pin.png'} alt='pin' width={25} height={25}/>
                    <Image src={'/Image/twitter.png'} alt='twitter' width={40} height={40}/>
                    <Image src={'/Image/instagram.jpg'} alt='instagram' width={26} height={26}/>
                </div>
                <small className={styles.info}>Sign up and get exclusive offers and <br/> coupon codes</small>
                 <div className={styles.headerImgs}>
        <button className={styles.button}>SIGN UP</button>
        </div>
            </div>
        </div>
        </div>
    )
}

export default Footer