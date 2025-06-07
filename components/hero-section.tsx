"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToNextSection = () => {
    const element = document.getElementById("how-we-work")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/images/hero-background.webp')`,
        }}
      />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:30px_30px]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">{t("heroTitle")}</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">{t("heroSubtitle")}</p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { emoji: "🔧", title: t("maintenance"), desc: t("maintenanceDesc"), delay: "delay-100" },
              { emoji: "🔍", title: t("diagnostics"), desc: t("diagnosticsDesc"), delay: "delay-300" },
              { emoji: "⚡", title: t("fastService"), desc: t("fastServiceDesc"), delay: "delay-500" },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative backdrop-blur-sm ${
                  // Mobile-specific opacity classes
                  index === 0
                    ? "bg-white/2 md:bg-white/10" // Prva kartica - još veća prozirnost na mobile
                    : index === 1
                      ? "bg-white/8 md:bg-white/10" // Druga kartica - povećana prozirnost na mobile
                      : "bg-white/5" // Treća kartica - povećana prozirnost
                } border border-white/20 rounded-2xl p-6 transform transition-all duration-700 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${feature.delay}`}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.emoji}
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-blue-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToContact}
            >
              {t("contactUs")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("tel:+385958427667")}
            >
              <Phone className="mr-2 h-5 w-5" />
              {t("callNow")}
            </Button>
          </div>

          {/* Contact Info */}
          <div
            className={`flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-200 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>+385 95 842 7667</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>autoserviskatanovic@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>Finčevec 5, Sveti Petar Orehovec</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0 flex justify-center text-white text-center z-10">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity"
          aria-label={t("scrollDown")}
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">{t("scrollDown")}</span>
          <ChevronDown className="h-4 w-4 sm:h-6 sm:w-6 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
