"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Wrench, Clock, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-intersection-observer"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const features = [
    {
      icon: Users,
      title: t("experiencedTeam"),
      description: t("experiencedTeamDesc"),
    },
    {
      icon: Wrench,
      title: t("modernTechnology"),
      description: t("modernTechnologyDesc"),
    },
    {
      icon: Clock,
      title: t("fastReliableRepairs"),
      description: t("fastReliableRepairsDesc"),
    },
    {
      icon: Shield,
      title: t("transparencyTrust"),
      description: t("transparencyTrustDesc"),
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-300/30 dark:border-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-blue-400/30 dark:border-blue-400/30 rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-blue-500/30 dark:border-blue-300/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-18 h-18 border border-blue-600/30 dark:border-blue-200/30 rotate-12 animate-pulse delay-500"></div>

        {/* Automotive-inspired elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 dark:opacity-10">
          <div className="w-96 h-96 border-2 border-blue-600 dark:border-blue-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500 dark:border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-700 dark:border-blue-200 rounded-full"></div>

          {/* Gear teeth simulation */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-blue-600 dark:bg-blue-400"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-blue-600 dark:bg-blue-400"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-4 bg-blue-600 dark:bg-blue-400"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-4 bg-blue-600 dark:bg-blue-400"></div>
        </div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t("aboutOurService")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">{t("aboutDescription")}</p>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg border border-white/20 dark:border-gray-700/20"
                  >
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-inner">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-autoservis.webp"
                alt="Autoservis Katanović - vanjski pogled na radionicu s Castrol Service znakom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Stats Card with enhanced design */}
            <Card className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-xl border-white/20 dark:border-gray-700/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-1">
                    2015
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t("establishedYear")}</div>
                </div>
              </CardContent>
            </Card>

            {/* Additional floating element */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full shadow-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
