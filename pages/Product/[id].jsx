import styles from '@/styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Pizza = {
    id      : 1,
    img     : "/Image/fullPizza.png",
    name    : "Chicken Pizza",
    price   : [20.00, 24.5, 26.7],
    desc    : "Large pizza with a lot of onions and chicken",
    category: "Category: Chicken, Launch, Pizza, Burger",
    tag     : "Tags: Healthy, Organic, Chicken, Sauce"
}

const Product = () => {
    const[size, setSize] = useState(0)

    return(
        <div   className = {styles.container}>
        <div   className = {styles.left}>
        <div   className = {styles.pizzaImg}>
        <Image src       = {Pizza.img} alt = 'pizzaImage' objectFit = 'contain' layout = 'fill'/>
                </div>
            </div>
            <div   className = {styles.right}>
            <h1    className = {styles.title}>{Pizza.name}</h1>
            <span  className = {styles.price}>${Pizza.price[size]}</span>
            <span  className = {styles.reviews}>8 Reviews</span>
            <p     className = {styles.description}>{Pizza.desc}</p>
            <p     className = {styles.description}>{Pizza.category}</p>
            <p     className = {styles.description}>{Pizza.tag}</p>
            <h3    className = {styles.choose}>Choose Pizza Size</h3>
            <div   className = {styles.pizzaSizes}>
            <div   className = {styles.size} onClick           = {() => setSize(0)}>
            <Image src       = "/Image/pizza_sizes.png" layout = 'fill' alt = 'smallPizza'/>
            <span  className = {styles.small}>Small</span>
                    </div>
                    <div   className = {styles.size} onClick           = {() => setSize(1)}>
                    <Image src       = "/Image/pizza_sizes.png" layout = 'fill' alt = 'smallPizza'/>
                    <span  className = {styles.small}>Medium</span>
                    </div>
                    <div   className = {styles.size} onClick           = {() => setSize(2)}>
                    <Image src       = "/Image/pizza_sizes.png" layout = 'fill' alt = 'smallPizza'/>
                    <span  className = {styles.small}>Large</span>
                    </div>
                </div>
                <h3    className = {styles.choose}>Choose additional ingredients</h3>
                <div   className = {styles.extraIngredients}>
                <div   className = {styles.option}>
                <input type      = 'checkbox' id = 'double' name = 'double' className = {styles.extra}/>
                <label htmlFor   = 'double'>Sauce</label>
                <input type      = 'checkbox' id = 'pepper' name = 'pepper' className = {styles.extra}/>
                <label htmlFor   = 'pepper'>Extra Spice</label>
                    </div>
                </div>
                <div    className = {styles.quantityDiv}>
                <input  className = {styles.quantity} type  = 'number' defaultValue = {1} min     = {1}/>
                <button className = {styles.button}>ADD TO CART</button>
                <Image  src       = {"/Image/love.png"} alt = 'love' width          = {40} height = {40} className = {styles.love}/>
                </div>
            </div>
        </div>
    )
}

export default Product