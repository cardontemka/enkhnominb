'use client'

import { useRef, useState } from 'react'
import styles from './Work.module.css'
import { useInView } from '../hooks/useInView'

const works = [
  {
    title: 'US / Бид',
    recognition: 'Best Film — Beyond the Blue Sky International Queer Film Festival (2025)',
    description: 'A mother returns to Mongolia after years abroad to begin life anew with her daughter. When the daughter reveals a truth that challenges inherited values, the mother confronts the tension between social norms and maternal love. \n\nDirector’s Note: The film examines generational and ideological distance through a mother raised by socialist values and a daughter shaped by a capitalist environment. Their conflict reflects how identity and belief are transmitted, questioned, and reshaped within a family. \n\n Role: Director · Screenwriter · Co-editor \n Runtime: 9 minutes | Narrative Short, Queer | Mongolia | 2025',
    link: 'https://www.youtube.com/watch?v=MK5ZnrP4DRw',
    image: '/works/film1.jpg',
  },
  {
    title: 'Raising a Success',
    recognition: 'Official Selection — 16th International Children’s Film Festival',
    description: 'A mother attempts to shape her daughter into the embodiment of her own unfulfilled dreams. As the daughter quietly pursues a different passion, a subtle conflict emerges between expectation and individuality. \n\nDirector’s Note: This dialogue-free film explores the silent pressure many Asian students experience within their families. \n Through visual metaphor rather than words, I aimed to express how parental ambition can unintentionally silence a child’s inner voice. \n\n Role: Director · Screenwriter · Lead Actress \n Runtime: 3 minutes | Narrative Short | Mongolia | 2023',
    link: 'https://www.youtube.com/watch?v=1KPFe6ki1kw',
    image: '/works/film2.png',
  },
  {
    title: 'Place4Hope — Campfire, 2025–2026',
    description: 'As part of Place4Hope’s global climate-action programme, I participated in Campfire Songs, an international 360° filmmaking project exploring resilience, hope, and storytelling in a world shaped by climate crisis. Collaborating with young filmmakers from over 15 countries, I filmed the Mongolian segment and contributed an original poem featured in the final film.',
    link: 'https://rosettalife.org/current-projects/place4hope-25/',
    image: '/works/other.jpg',
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

                {work.recognition && (
                  <p className={styles.recognition}>{work.recognition}</p>
                )}

                {work.description && (
                  <>
                    <p
                      className={`${styles.description} ${isOpen ? styles.open : ''}`}
                    >
                      {work.description}
                    </p>
                    <button
                      className={styles.readMore}
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                    >
                      {isOpen ? 'Show less' : 'Read more'}
                    </button>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
