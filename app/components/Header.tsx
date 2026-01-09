'use client'

import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [hidden, setHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [open, setOpen] = useState(false)

    const links = [
        { label: 'About', href: '#about' },
        { label: 'Work', href: '#work' },
        { label: 'Contact', href: '#contact' },
    ]

    // Scroll hide/show
    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            const current = window.scrollY

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (current > lastScrollY + 3 && current > 50) {
                        setHidden(true)
                    } else if (current < lastScrollY - 3) {
                        setHidden(false)
                    }
                    setLastScrollY(current)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    // Scroll lock when menu open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
    }, [open])

    return (
        <header className={`${styles.header} ${hidden ? styles.hidden : ''}`}>
            <div className={styles.container}>
                <span className={styles.logo}>Enkhnomin✨</span>

                <button
                    className={styles.menuButton}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X className={styles.menuIcon} size={28} /> : <Menu className={styles.menuIcon} size={28} />}
                </button>


                <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
                    {links.map((link, idx) => (
                        <a
                            key={link.href}
                            href={link.href}
                            style={{ '--i': idx } as React.CSSProperties}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}