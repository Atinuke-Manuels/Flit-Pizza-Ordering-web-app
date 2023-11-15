import Image from 'next/image'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return(
        <div className={styles.container}>
        <div>
            <Image src="/Image/pizza-logo.png" alt='logo' width={60} height={75}/>
        </div>
        <div><Image src="/Image/half-tomato.png" alt='logo' width={150} height={60}/></div>
        <div className={styles.navItem2}>
        <ul className={styles.list}>
        <li className={styles.navItem}>HOME</li>
        <li className={styles.navItem}>PRODUCTS</li>
        <li className={styles.navItem}>PAGES</li>
        <li className={styles.navItem}>BLOG</li>
        <li className={styles.navItem}>CONTACT</li>
        </ul>
        <div className={styles.navItem3}>
            <Image src="/Image/search.png" alt='logo' width={28} height={28} className={styles.navItemImg}/>
        </div>
        <div className={`${styles.navItemImg} ${styles.tintOverlay}`}>
            <Image src="/Image/cart.png" alt='logo' width={28} height={28} className={styles.navItemImg}/>
            <div className={styles.counter}>2</div>
        </div>
        </div>
        </div>
    )
}

export default NavBar