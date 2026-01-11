import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bid.mp4" type="video/mp4" />
      </video>
      
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Enkhnomin
        </h1>
      </div>
    </section>
  )
}
