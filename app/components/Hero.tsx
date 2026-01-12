'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.currentTime >= 8.5) {
        setFade(true)
        setTimeout(() => setFade(false), 1000)
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={`${styles.video} ${fade ? styles.fadeEffect : ''}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/heroThumb.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.webm" type="video/webm" />
      </video>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>Enkhnomin</h1>
      </div>
    </section>
  )
}
