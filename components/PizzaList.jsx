import styles from '@/styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
    return(
        <div className = {styles.container}>
        <h3  className = {styles.redHeading}>Popular Dishes</h3><br/>
        <h1  className = {styles.mainHeading}>Browse our Menu</h1>
        <div className = {styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
            </div>
        </div>
    )
}

export default PizzaList