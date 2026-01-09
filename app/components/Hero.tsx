import styles from './Hero.module.css'


export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Enkhnomin</h1>
                <p className={styles.text}>The greatest and most beautiful director</p>
            </div>
        </section>
    )
}