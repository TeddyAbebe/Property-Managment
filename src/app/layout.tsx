import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ReduxProvider } from "@/redux/provider"
import { ToastContainer } from "react-toastify"
import NextTopLoader from "nextjs-toploader"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import "react-toastify/dist/ReactToastify.css"
import Providers from "@/components/layout/providers"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Property Management System",
  description: "A property management system",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
        suppressHydrationWarning={true}
      >
        <NextTopLoader showSpinner={false} />
        <Providers>
          <ToastContainer />
          <ReduxProvider>
            <NuqsAdapter>{children}</NuqsAdapter>
          </ReduxProvider>
        </Providers>
      </body>
    </html>
  )
}
