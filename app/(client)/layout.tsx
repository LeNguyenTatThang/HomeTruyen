import type { Metadata } from 'next'
import '../globals.css'
import ClientLayout from './components/ClientLayout'

export const metadata: Metadata = {
  title: 'Home Truyện'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
