import Image from 'next/image'
import styles from '../styles/LandingPage.module.css'
import React from 'react';
import Button from './Button';
import { FaShoppingCart } from "react-icons/fa";

const LandingPage = () => {
    return(
        <div   className = {styles.container}>
        <Image src       = {'/Image/orange_circle2.png'} alt = 'circle' width     = {500} height = {500} className = {styles.orange}/>
        <Image src       = {'/Image/fullPizza.png'} alt      = 'full pizza' width = {310} height = {310} className = {styles.fullPizza}/>
        <Image src       = {'/Image/slicedPizza.png'} alt    = 'full pizza' width = {150} height = {150} className = {styles.slicedPizza}/>
        <Image src       = {'/Image/onion.png'} alt          = 'full pizza' width = {50} height  = {50} className  = {styles.onion}/>
        <div>
        <div         className                                          = {styles.title}>
        <h1>Handmade,<br/> With an Extra <br/> Pinch of <span className = {styles.love}>Love</span></h1><br/>
        <h           className                                          = {styles.subTitle}>Our pizzas are extremely tasty with lots of spices <br/> and fresh ingredients. A trial will convince you.</h>
        </div>
        <div>
            <Button
            imageUrl={<FaShoppingCart style={{ color: "#ffffff", marginTop: '5px', width: '25px', marginRight: '5px' }} />}
            linkUrl="/Product/213"
            width={25} height={25}
            title="ORDER NOW" />
        </div>
        </div>
        </div>
    )
}

export default LandingPage

