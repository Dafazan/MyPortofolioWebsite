import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import * as THREE from 'three';
import NavbarCustom from '../app/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dafazan',
  description: 'Dafazan Portofolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <NavbarCustom />
        {children}</body>
    </html>
  )
}
