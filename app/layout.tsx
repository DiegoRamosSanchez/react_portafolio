import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diego Alexander Ramos | Analista de Sistemas & Desarrollador Fullstack",
  verification: {
    google: "XOswORhhSydnnVtJ6fmae0OTOM09VdMwS-arhO88sS0",
  },
  description:
    "Portafolio profesional de Diego Alexander Ramos, experto en Java (Spring Boot), Angular y arquitecturas de microservicios. Especialista en soluciones Fintech y gestión social.",
  keywords: [
    "Diego Alexander Ramos",
    "Desarrollador Fullstack",
    "Analista de Sistemas",
    "Java Spring Boot",
    "Angular",
    "Microservicios",
    "Fintech",
    "Portafolio",
  ],
  authors: [{ name: "Diego Alexander Ramos" }],
  openGraph: {
    siteName: "Diego Alexander Ramos Portfolio",
    title: "Diego Alexander Ramos | Analista de Sistemas & Desarrollador Fullstack",
    description:
      "Explora los proyectos y experiencia profesional de Diego Alexander Ramos en desarrollo de software moderno.",
    type: "website",
    locale: "es_PE",
    url: "https://dars-portafolio.vercel.app",
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
  applicationName: "Diego Alexander Ramos Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.jpg",
  },
  // Añade esto para controlar mejor cómo se ve en búsquedas
  metadataBase: new URL("https://dars-portafolio.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}