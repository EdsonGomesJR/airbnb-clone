import { ReactNode } from 'react'
import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from './components/navbar/Navbar'
import { RegisterModal } from './components/modals/RegisterModal'
import { ToasterProvider } from './providers/ToasterProvider'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
