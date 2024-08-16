import type { Metadata } from "next"
import "./globals.css"
import { ReactNode } from 'react'
import Nav from "./client/components/Nav"
import Footer from "./client/components/Footer"

export const metadata: Metadata = {
  title: "Home Truyện",
}

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout