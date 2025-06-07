import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://autoservis-katanovic.com"),
  title: {
    default: "Autoservis Katanović - Profesionalni autoservis u Finčevcu",
    template: "%s | Autoservis Katanović",
  },
  description:
    "Autoservis Katanović je pouzdan i stručan servis za sve vrste vozila. Pružamo širok spektar usluga od redovnog održavanja do složenih popravaka i dijagnostike.",
  keywords: [
    "autoservis",
    "popravak automobila",
    "održavanje vozila",
    "dijagnostika",
    "Finčevec",
    "Sveti Petar Orehovec",
    "Hrvatska",
  ],
  authors: [{ name: "Autoservis Katanović" }],
  creator: "Autoservis Katanović",
  publisher: "Autoservis Katanović",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://autoservis-katanovic.com",
    siteName: "Autoservis Katanović",
    title: "Autoservis Katanović - Profesionalni autoservis",
    description: "Pouzdan i stručan servis za sve vrste vozila osnovan 2015. godine",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autoservis Katanović",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoservis Katanović - Profesionalni autoservis",
    description: "Pouzdan i stručan servis za sve vrste vozila osnovan 2015. godine",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Autoservis Katanović",
              description: "Profesionalni autoservis za sve vrste vozila",
              url: "https://autoservis-katanovic.com",
              telephone: "+385958427667",
              email: "autoserviskatanovic@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Finčevec 5",
                addressLocality: "Sveti Petar Orehovec",
                postalCode: "48260",
                addressCountry: "HR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "46.1",
                longitude: "16.2",
              },
              openingHours: ["Mo-Fr 08:00-20:00", "Sa 08:00-14:00"],
              priceRange: "$$",
              image: "https://autoservis-katanovic.com/og-image.jpg",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
