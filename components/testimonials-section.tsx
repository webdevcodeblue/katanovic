"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-intersection-observer"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Filip Plavec",
      role: t("satisfiedClient"),
      content: t("testimonial1"),
      rating: 5,
      avatar: "/images/testimonials/filip-plavec.jpg",
    },
    {
      name: "Tomislav Žuti",
      role: t("satisfiedClient"),
      content: t("testimonial2"),
      rating: 5,
      avatar: "/images/testimonials/tomislav-zuti.jpg",
    },
    {
      name: "Zdravko Nemčić",
      role: t("newClient"),
      content: t("testimonial3"),
      rating: 5,
      avatar: "/images/testimonials/zdravko-nemcic.jpg",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const nextTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black"></div>

      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-300 dark:bg-blue-200 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse delay-500"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/20 dark:border-blue-300/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-300/20 dark:border-blue-200/20 transform rotate-45"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-blue-300 dark:text-blue-200 font-semibold uppercase tracking-wider text-sm">
            {t("testimonials")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-2">{t("whatClientsSay")}</h2>
          <p className="text-xl text-blue-100 dark:text-blue-50 max-w-2xl mx-auto">{t("clientExperiences")}</p>
        </div>

        {/* Mobile: Single testimonial with navigation */}
        <div className="block lg:hidden">
          <div className="relative px-4">
            <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-xl transition-all duration-500 border-white/20 dark:border-gray-700/20 mx-auto max-w-lg">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-200 dark:ring-blue-600"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setActiveIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8 px-6 md:px-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 border-white/20 dark:border-gray-700/20 hover:bg-white dark:hover:bg-gray-800 card-hover ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-200 dark:ring-blue-600"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
