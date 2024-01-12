import type { Metadata } from 'next'
import '@/styles/globals.css'

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
          <section className='flex flex-grow flex-1'>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
