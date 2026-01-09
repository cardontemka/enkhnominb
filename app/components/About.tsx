import styles from './About.module.css'


export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.image}></div>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>About</h2>
                    <p className={styles.text}>
                        About you. Beautiful, smart, film director etc. text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text 
                    </p>
                </div>
            </div>
        </section>
    )
}