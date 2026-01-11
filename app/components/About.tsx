'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'
import Image from 'next/image'

const aboutText = `My name is Enkhnomin Batdorj, a young, emerging filmmaker from Mongolia whose work explores identity, and generational tension within shifting social landscapes.
Through narrative shorts and international collaborations, I focus on quiet conflicts, using minimal dialogue and visual storytelling.
My projects have received recognition at international film festivals and have been developed through cross-cultural creative programs.`

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, '-100px')
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!inView) return
    let index = 0
    const total = aboutText.length
    const intervalTime = 500 / total // 0.5 секундын дотор бүх text гарна

    const interval = setInterval(() => {
      setDisplayed(aboutText.slice(0, index + 1))
      index++
      if (index === total) clearInterval(interval)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [inView])

  return (
    <section id="about" ref={ref} className={`${styles.about} ${inView ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image
            src="/me.jpg"
            alt="About image"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>About</h2>
          <p style={{ whiteSpace: 'pre-wrap' }}>{displayed}</p>
        </div>
      </div>
    </section>
  )
}
