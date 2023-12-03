import Image from 'next/image'
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {
    return(
        <div className = {styles.container}>
        <div>
            <Image src = "/Image/pizza-logo.png" alt = 'logo' width = {60} height = {75}/>
        </div>
        <div><Image src       = "/Image/half-tomato.png" alt = 'logo' width = {150} height = {60}/></div>
        <div        className={`${styles.navItem2} ${styles.hideOnLargeScreens}`}>
        <ul         className = {styles.list}>
        <li         className = {styles.navItem}><Link href  = "/">HOME</Link></li>
        <li         className = {styles.navItem}><Link href  = "/productsPage">PRODUCTS</Link></li>
        <li         className = {styles.navItem}>PAGES</li>
        <li         className = {styles.navItem}>BLOG</li>
        <li         className = {styles.navItem}>CONTACT</li>
        </ul>
        <div   className = {styles.navItem3}>
        <Image src       = "/Image/search.png" alt = 'logo' width = {28} height = {28} className = {styles.navItemImg}/>
        </div>
        <div  className = {`${styles.navItemImg} ${styles.tintOverlay}`}>
        <Link href      = "/cart"><FaShoppingCart style={{ color: "blue", width: '25px', height: '25px'}} /></Link>
        <div  className = {styles.counter}>2</div>
        </div>
        </div>
        </div>
    )
}

export default NavBar