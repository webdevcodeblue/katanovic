"use client"

import { useEffect, useRef, useState } from "react"

interface UseInViewOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, triggerOnce = false, rootMargin = "0px" } = options
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, triggerOnce, rootMargin])

  return { ref, inView }
}
