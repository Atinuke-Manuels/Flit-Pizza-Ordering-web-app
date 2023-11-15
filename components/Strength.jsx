import styles from "@/styles/Strength.module.css"
import Image from "next/image"

const Strength =() => {
    return(
        <div className={styles.container}>
            <h3 className={styles.redHeading}>Our Strength</h3>
            <h1 className={styles.mainHeading}>Why We Are The Best?</h1>
            <div className={styles.cardDiv}>
                <div>
                <Image src={'/Image/rice-bowl.png'} alt="rice-bowl" width={30} height={30}/>
                <h4 className={styles.cardHeader}>All kinds of food</h4>
                <p className={styles.cardDesc}>Amazing burst of healthy food.<br/>A trial will convince you...</p>
                </div>
                <div>
                <Image src={'/Image/fan.png'} alt="rice-bowl" width={30} height={30}/>
                <h4 className={styles.cardHeader}>All kinds of food</h4>
                <p className={styles.cardDesc}>Amazing burst of healthy food.<br/>A trial will convince you...</p>
                </div>
                <div>
                <Image src={'/Image/smile.png'} alt="rice-bowl" width={30} height={30}/>
                <h4 className={styles.cardHeader}>All kinds of food</h4>
                <p className={styles.cardDesc}>Amazing burst of healthy food.<br/>A trial will convince you...</p>
                </div>
                <div>
                <Image src={'/Image/location.png'} alt="rice-bowl" width={30} height={30}/>
                <h4 className={styles.cardHeader}>All kinds of food</h4>
                <p className={styles.cardDesc}>Amazing burst of healthy food.<br/>A trial will convince you...</p>
                </div>
            </div>
        </div>
    )
}

export default Strength