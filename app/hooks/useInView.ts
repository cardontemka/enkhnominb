import { useState, useEffect, RefObject } from 'react'

export function useInView<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  rootMargin = '0px',
  threshold = 0.1
) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!ref.current) return

    // Хэрвээ дэлгэцний өргөн <= 300px бол animation-гүй
    if (window.innerWidth <= 300) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { root: null, rootMargin, threshold }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
      observer.disconnect()
    }
  }, [ref, rootMargin, threshold])

  return isInView
}
