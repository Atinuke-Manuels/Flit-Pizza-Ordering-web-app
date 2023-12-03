import styles from '@/styles/PizzaCard.module.css'
import Image from 'next/image'
import Button from './Button'
import { FaShoppingCart } from "react-icons/fa";




const PizzaCard = () => {


    return(
        <div   className = {styles.container}>
        <Image src       = {'/Image/sandWitch.jpg'} alt                       = 'burger' width = "250" height = "250" className = {styles.pizzaImg}/>
        <div   className = {styles.span}>
        <span  className = {styles.title}>Burger Pizza </span><span className = {styles.price}>$20</span></div>
        <Image src       = {'/Image/rating.jpg'} alt                          = 'rating' width = {80} height  = {40}/>
        <p     className = {styles.desc}>This is burger pizza</p>
        <div>
            <Button
            imageUrl={<FaShoppingCart style={{ color: "#ffffff", marginTop: '5px', width: '25px' }} />}
            linkUrl  = "/Product/213"
            width    = {15}
            height   = {15}
            title    = "ORDER NOW"/>
        </div>
        </div>
    )
}

export default PizzaCard



// API connection
// import React from 'react';
// import styles from '@/styles/PizzaCard.module.css';
// import Image from 'next/image';
// import Button from './Button';
// import { FaShoppingCart } from 'react-icons/fa';

// const PizzaCard = ({ product }) => {
//     console.log(product);
//   // Check if product is defined before destructuring
//   if (!product) {
//     return null; // Or handle the case where product is undefined
//   }

//   const { title, desc, img, prices, _id } = product;

//   return (
//     <div className={styles.container}>
//       <Image src={img} alt={title} width="250" height="250" className={styles.pizzaImg} />
//       <div className={styles.span}>
//         <span className={styles.title}>{title}</span>
//         <span className={styles.price}>{`$${prices[0]}`}</span>
//       </div>
//       {/* Assuming you want to display some kind of rating */}
//       {/* <Image src={'/Image/rating.jpg'} alt={'rating'} width={80} height={40} /> */}
//       <p className={styles.desc}>{desc}</p>
//       <div>
//         <Button
//           imageUrl={<FaShoppingCart style={{ color: '#ffffff', marginTop: '5px', width: '25px' }} />}
//           linkUrl={`/Product/${_id}`} // Assuming '_id' is the unique identifier
//           width={15}
//           height={15}
//           title="ORDER NOW"
//         />
//       </div>
//     </div>
//   );
// };

// export default PizzaCard;
