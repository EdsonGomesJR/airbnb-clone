import { ReactNode } from 'react'
import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from './components/navbar/Navbar'
import { RegisterModal } from './components/modals/RegisterModal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
