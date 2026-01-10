import Image from 'next/image'
import styles from './Work.module.css'

const works = [
  {
    title: 'Film #1',
    description: 'About that film. About that film. About that film.',
    link: '#',
    image: '/works/iaddicted.jpg',
  },
  {
    title: 'Film #2',
    description: 'About that film. About that film. About that film.',
    link: '#',
    image: '/works/cute1.jpg',
  },
  {
    title: 'Other works maybe',
    description: 'About that work.',
    link: '#',
    image: '/works/cute2.jpg',
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Selected Work</h2>

        {works.map((work, index) => (
          <a
            key={work.title}
            href={work.link}
            className={`${styles.item} ${index % 2 === 0 ? styles.reverse : ''}`}
          >
            <div className={styles.thumb}>
              <Image
                src={work.image}
                alt={work.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className={styles.textContainer}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
