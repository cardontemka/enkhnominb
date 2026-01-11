import styles from './Footer.module.css'


export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <a className={styles.link} href="https://www.instagram.com/in_the_mood_for_enkhnomin/">Instagram</a>
                    <a className={styles.link} href="https://www.facebook.com/B.Enkhnomin">Facebook</a>
                    <a className={styles.link} href="https://boxd.it/3N2el">Letterboxd</a>
                    <a className={styles.link} href="enkhnomin25@gmail.com">Email</a>
                </div>
                <p className={styles.copyright}>© 2026</p>
            </div>
        </footer>
    )
}