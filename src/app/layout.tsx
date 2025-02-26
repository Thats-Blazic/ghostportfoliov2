import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ghost Force Studio',
  description: 'Crafting brilliance. Defining you.',
  openGraph: {
    title: 'Ghost Force Studio',
    description: 'Crafting brilliance. Defining you.',
    url: 'https://ghostforcestudio.com',
    siteName: 'Ghost Force Studio',
    images: [
      {
        url: '/projects/thumb/GHOST.jpg',
        width: 1200,
        height: 630,
        alt: 'Ghost Force Studio Preview'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghost Force Studio',
    description: 'Crafting brilliance. Defining you.',
    images: ['/projects/thumb/GHOST.jpg'],
  },
  icons: {
    icon: '/projects/fav.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="/projects/fav.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-black`}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 
