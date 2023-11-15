import Footer from "./Footer"
import NavBar from "./NavBar"
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return(
        <div className={styles.main}>
        <NavBar/>
        {children}
        <Footer/>
        </div>
    )
}

export default Layout