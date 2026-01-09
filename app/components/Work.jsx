import styles from './Work.module.css'


const works = [
    {
        title: 'Film #1',
        description: 'About that film. About that film. About that film.',
        link: '#',
    },
    {
        title: 'Film #2',
        description: 'About that film. About that film. About that film.',
        link: '#',
    },
    {
        title: 'Other works maybe',
        description: 'About that work.',
        link: '#',
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
                        className={`${styles.item} ${index % 2 == 0 ? styles.reverse : ''}`}
                    >
                        <div className={styles.thumb} />
                        <div className={styles.textContainer}>
                            <h3 className={styles.title}>{work.title}</h3>
                            <p className={styles.text}>{work.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}