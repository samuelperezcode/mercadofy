import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Mercadofy',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className='h-full relative antialiased font-sans'>
        <main className='relative flex flex-col min-h-screen'>
          <Navbar />
          <section className='flex flex-col flex-grow flex-1'>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
