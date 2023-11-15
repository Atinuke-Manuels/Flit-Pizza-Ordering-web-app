import Image from 'next/image'
import styles from '../styles/LandingPage.module.css'
import React from 'react';

const LandingPage = () => {
    return(
        <div className={styles.container}>
        <Image src={'/Image/orange_circle2.png'} alt='circle' width={500} height={500} className={styles.orange}/>
        <Image src={'/Image/fullPizza.png'} alt='full pizza' width={310} height={310} className={styles.fullPizza}/>
        <Image src={'/Image/slicedPizza.png'} alt='full pizza' width={150} height={150} className={styles.slicedPizza}/>
        <Image src={'/Image/onion.png'} alt='full pizza' width={50} height={50} className={styles.onion}/>
        <div>
            <div className={styles.title}>
        <h1>Handmade,<br/> With an Extra <br/> Pinch of <span className={styles.love}>Love</span></h1>
        <h className={styles.subTitle}>Our pizzas are extremely tasty with lots of spices <br/> and fresh ingredients. A trial will convince you.</h>
        <div className={styles.headerImgs}>
        <Image src={'/Image/cart.png'} width={15} height={15} className={styles.cartBtn}/>
        <button className={styles.button}>ORDER NOW</button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default LandingPage