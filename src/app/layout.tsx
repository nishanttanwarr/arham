
import {Poiret_One } from 'next/font/google'
import './globals.css'


const poiretOne = Poiret_One({
  weight: ['400'],  // Poiret One only comes in regular weight (400)
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poiretOne.className}>
      <body>{children}</body>
    </html>
  )
}