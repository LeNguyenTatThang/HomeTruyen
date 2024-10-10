import type { Metadata } from 'next'
import '../globals.css'
import ClientLayout from './components/ClientLayout'
import ClientSessionProvider from '@/components/ClientSessionProvider'

export const metadata: Metadata = {
  title: 'Home Truyện'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientSessionProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ClientSessionProvider>
      </body>
    </html>
  )
}
