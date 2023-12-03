import styles from '@/styles/FeedBack.module.css'
import Image from 'next/image'

const FeedBack = () => {
    return(
        <      div className = {styles.container}>
        <Image src           = {'/Image/greenLeaf.png'} alt = 'greenLeaf' width = {70} height = {80}/>
        <h3    className     = {styles.redHeading}>Customer Feedback</h3><br/>
        <h1    className     = {styles.mainHeading}>Client Testimonials</h1>
        <div   className     = {styles.cardDiv}>
        <div   className     = {styles.card}>
        <Image src           = {'/Image/feedBack.jpg'} alt  = 'pic1' width      = {80} height = {80} className = {styles.feedBackImg}/>
                    <h3>Takar Bowa</h3>
                    <p className = {styles.pTag}>Had an amazing experience.Will definitely recommend</p>
                </div>
                <div   className = {styles.card}>
                <Image src       = {'/Image/feedBack2.jpg'} alt = 'pic1' width = {80} height = {80} className = {styles.feedBackImg}/>
                    <h3>Bob Sandy</h3>
                    <p className = {styles.pTag}>Had an amazing experience.Will definitely recommend</p>
                </div>
                <div   className = {styles.card}>
                <Image src       = {'/Image/feedBack3.jpg'} alt = 'pic1' width = {80} height = {80} className = {styles.feedBackImg}/>
                    <h3>frizzy Ben</h3>
                    <p className = {styles.pTag}>Had an amazing experience.Will definitely recommend</p>
                </div>
                <div   className = {styles.card}>
                <Image src       = {'/Image/feedBack4.jpg'} alt = 'pic1' width = {80} height = {80} className = {styles.feedBackImg}/>
                    <h3>Summer Halt</h3>
                    <p className = {styles.pTag}>Had an amazing experience.Will definitely recommend</p>
                </div>
            </div>
        </div>
    )
}

export default FeedBack