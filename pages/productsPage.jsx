const { default: PizzaCard } = require("@/components/PizzaCard")
import styles from "@/styles/ProductPage.module.css"
import { IoFilter } from "react-icons/io5";


const ProductsPage = () => {
    return(
        <div className={styles.container}>
        <div className={styles.filterDiv}>
            <div className={styles.headerImgs}>
        <IoFilter width={25} height={25} className={styles.cartBtn}/>
        <button className={styles.button}>Filter</button>
        </div>
            <div className={styles.filterInput}><p>Show all 9 results</p>
            <input type="search"/></div>
        </div>
            <PizzaCard/>
        </div>
    )
}

export default ProductsPage

// import { useState, useEffect } from 'react';
// import { IoFilter } from 'react-icons/io5';
// import styles from '@/styles/ProductPage.module.css';
// import PizzaCard from '@/components/PizzaCard';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://pizza-ordering-anno.onrender.com/api/products');
//         if (response.ok) {
//           const productsData = await response.json();
//           setProducts(productsData);
//         } else {
//           console.error('Failed to fetch products:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

//   return (
//     <div className={styles.container}>
//       <div className={styles.filterDiv}>
//         <div className={styles.headerImgs}>
//           <IoFilter width={25} height={25} className={styles.cartBtn} />
//           <button className={styles.button}>Filter</button>
//         </div>
//         <div className={styles.filterInput}>
//           <p>{`Show all ${products.length} results`}</p>
//           <input type="search" />
//         </div>
//       </div>
//         <div className={styles.wrapper}>
//         {products.map((product) => (
//         <PizzaCard key={product._id} product={product} />
//       ))}
//         </div>
//     </div>
//   );
// };

// export default ProductsPage;
