"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Zap, Activity, Wind, Lightbulb, Shield, FileText, Snowflake } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-intersection-observer"
import { useState, useEffect } from "react"

export function ServicesSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  const services = [
    {
      icon: Wrench,
      title: t("regularMaintenance"),
      description: t("regularMaintenanceDesc"),
      image: "/images/services/maintenance.jpg",
    },
    {
      icon: Shield,
      title: t("brakeService"),
      description: t("brakeServiceDesc"),
      image: "/images/services/brakes.jpg",
    },
    {
      icon: Zap,
      title: t("electricalServices"),
      description: t("electricalServicesDesc"),
      image: "/images/services/electrical.jpg",
    },
    {
      icon: Activity,
      title: t("suspensionService"),
      description: t("suspensionServiceDesc"),
      image: "/images/services/suspension.webp",
    },
    {
      icon: Wind,
      title: t("exhaustSystems"),
      description: t("exhaustSystemsDesc"),
      image: "/images/services/exhaust.jpg",
    },
    {
      icon: Snowflake,
      title: t("airConditioningService"),
      description: t("airConditioningServiceDesc"),
      image: "/images/services/air-conditioning.webp",
    },
    {
      icon: FileText,
      title: t("technicalInspection"),
      description: t("technicalInspectionDesc"),
      image: "/images/services/technical-inspection.jpg",
    },
    {
      icon: Lightbulb,
      title: t("lightingService"),
      description: t("lightingServiceDesc"),
      image: "/images/services/lighting.jpg",
    },
  ]

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement
      const scrollLeft = container.scrollLeft
      const cardWidth = 288 // 72 * 4 (w-72 = 18rem = 288px)
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, services.length - 1))
    }

    const scrollContainer = document.querySelector(".scrollbar-hide")
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [services.length])

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>

      {/* Automotive-inspired pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {/* Enhanced tire track pattern */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 left-16 w-3 h-3 bg-blue-500 dark:bg-blue-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-44 left-12 w-2 h-2 bg-blue-400 dark:bg-blue-200 rounded-full animate-pulse delay-700"></div>

          <div className="absolute top-40 right-20 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-52 right-26 w-3 h-3 bg-blue-500 dark:bg-blue-300 rounded-full animate-pulse delay-1300"></div>
          <div className="absolute top-64 right-22 w-2 h-2 bg-blue-400 dark:bg-blue-200 rounded-full animate-pulse delay-1700"></div>

          <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-52 left-1/4 w-3 h-3 bg-blue-500 dark:bg-blue-300 rounded-full animate-pulse delay-2300"></div>
          <div className="absolute bottom-64 left-1/4 w-2 h-2 bg-blue-400 dark:bg-blue-200 rounded-full animate-pulse delay-2700"></div>

          {/* Automotive gear lines */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-blue-300 dark:bg-blue-600 rotate-45"></div>
          <div className="absolute top-2/3 right-1/3 w-24 h-0.5 bg-blue-400 dark:bg-blue-500 rotate-12"></div>
        </div>

        {/* Hexagonal pattern */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-300 dark:border-blue-600 transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-blue-400 dark:border-blue-500 transform rotate-12"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm">
            {t("expertSolutions")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            <span className="text-gradient dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-600 dark:bg-clip-text dark:text-transparent">
              {t("ourServices")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("ourServicesDesc")}</p>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 scrollbar-hide">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="flex-none w-72 snap-center" onClick={() => setActiveIndex(index)}>
                  <Card
                    className={`group hover:shadow-xl transition-all duration-300 overflow-hidden glass dark:bg-gray-800/70 dark:border-gray-700/20 border-white/20 hover:bg-white dark:hover:bg-gray-800 h-full ${activeIndex === index ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""}`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-blue-600 dark:bg-blue-400 w-4" : "bg-blue-300 dark:bg-blue-600"}`}
                  onClick={() => {
                    setActiveIndex(index)
                    const container = document.querySelector(".scrollbar-hide")
                    if (container) {
                      const cardWidth = 288 // w-72 = 288px
                      container.scrollTo({
                        left: index * cardWidth,
                        behavior: "smooth",
                      })
                    }
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 overflow-hidden glass dark:bg-gray-800/70 dark:border-gray-700/20 border-white/20 hover:bg-white dark:hover:bg-gray-800 card-hover ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
