import Image from 'next/image'
import styles from '../styles/SubIndex.module.css'

const SubIndex = () => {
    return(
        <div className={styles.container}>
        <div>
            <Image src={'/Image/circle_pizza.png'} alt='SecondPizza' width={300} height={300} className={styles.circle_pizza}/>
        </div>
        <section className={styles.section}>
            <div>
            <h1 className={styles.header}>Daily fresh and <br/> always tasty </h1>
            <div className={styles.pTag}><p>Come and taste new and exciting pizza variants.</p>
            <br/>
            <p>We have over 10 handmade Pizza variants with a </p>
            <br/>
            <p>burst of freshness. Come and taste</p></div>
            </div>
            <div className={styles.garlic}>
                <Image src={'/Image/garlic.png'} alt='garlic' width={50} height={50}/>
            </div>
        </section>
        </div>
    )
}

export default SubIndex