'use client'

import { useRef, useState } from 'react'
import styles from './Work.module.css'
import { useInView } from '../hooks/useInView'

const works = [
  {
    title: 'US / Бид',
    description: 'Best Film — Beyond the Blue Sky International Queer Film Festival (2025)',
    link: 'https://www.youtube.com/watch?v=MK5ZnrP4DRw',
    image: '/works/film1.jpg',
  },
  {
    title: 'Raising a Success',
    description: 'Official Selection — 16th International Children’s Film Festival',
    link: 'https://www.youtube.com/watch?v=1KPFe6ki1kw',
    image: '/works/film2.png',
  },
  {
    title: 'Place4Hope — Campfire, 2025–2026',
    description: 'As part of Place4Hope’s global climate-action programme, I participated in Campfire Songs, an international 360° filmmaking project exploring resilience, hope, and storytelling in a world shaped by climate crisis. Collaborating with young filmmakers from over 15 countries, I filmed the Mongolian segment and contributed an original poem featured in the final film.',
    link: 'https://rosettalife.org/current-projects/place4hope-25/',
    image: '/works/yes.jpg',
  },
]

export default function Work() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, '-100px')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="work" ref={ref} className={`${styles.work} ${inView ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Selected Work</h2>
        {works.map((work, index) => {
          const isOpen = activeIndex === index
          return (
            <div
              key={work.title}
              className={`${styles.item} ${index % 2 === 0 ? styles.reverse : ''}`}
            >
              <a href={work.link} className={styles.thumbLink}>
                <div
                  className={styles.thumb}
                  style={{ backgroundImage: `url(${work.image})` }}
                />
              </a>

              <div className={styles.textContainer}>
                <a href={work.link} className={styles.textLink}>
                  <h3>{work.title}</h3>
                </a>
                <p
                  className={`${styles.description} ${isOpen ? styles.open : ''}`}
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                >
                  {work.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
