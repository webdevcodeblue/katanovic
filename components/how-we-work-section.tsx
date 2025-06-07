"use client"

import { Search, FileText, Wrench, ThumbsUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-intersection-observer"

export function HowWeWorkSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const steps = [
    {
      icon: Search,
      title: t("diagnostics"),
      description: t("diagnosticsStep"),
      number: "01",
      delay: "delay-100",
    },
    {
      icon: FileText,
      title: t("quote"),
      description: t("quoteStep"),
      number: "02",
      delay: "delay-200",
    },
    {
      icon: Wrench,
      title: t("repair"),
      description: t("repairStep"),
      number: "03",
      delay: "delay-300",
    },
    {
      icon: ThumbsUp,
      title: t("satisfaction"),
      description: t("satisfactionStep"),
      number: "04",
      delay: "delay-400",
    },
  ]

  return (
    <section id="how-we-work" className="section-padding relative overflow-hidden">
      {/* Modern gradient background with automotive pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-600 dark:border-blue-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-2 border-blue-400 dark:border-blue-300 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-blue-300 dark:border-blue-500 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 border border-blue-500 dark:border-blue-400 rotate-12"></div>

        {/* Automotive gear pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-blue-200 dark:border-gray-600 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-300 dark:border-gray-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-400 dark:border-gray-400 rounded-full"></div>
        </div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm">
            {t("ourProcess")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            <span className="text-gradient dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-600 dark:bg-clip-text dark:text-transparent">
              {t("howWeWork")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("howWeWorkDesc")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-6 md:px-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${step.delay} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="glass dark:bg-gray-800/70 dark:border-gray-700/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full border border-white/20 card-shine">
                  {/* Step Number - Left Side */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mt-0 shadow-inner">
                    <IconComponent className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-600 dark:to-blue-500 transform -translate-y-1/2" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
