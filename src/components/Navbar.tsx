'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { href: '/', label: 'Home', icon: 'fa-house' },
    { href: '/about', label: 'About', icon: 'fa-user-group' },
    { href: '/start-project', label: 'Start Project', icon: 'fa-rocket' },
    { href: '/mentorship', label: 'Mentorship', icon: 'fa-star' },
    { href: '/course', label: 'Course', icon: 'fa-graduation-cap' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/20 backdrop-blur-lg' 
        : 'bg-black/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="relative">
            <Image
              src="/projects/logo.png"
              alt="Logo"
              width={150}
              height={40}
              className="w-auto h-12 transition-opacity duration-300 hover:opacity-80"
              priority
              quality={100}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href} 
                active={pathname === item.href}
                icon={item.icon}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://calendly.com/ghostforcestudio/30min?month=2025-02"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-violet-500/50 bg-[linear-gradient(110deg,#2d1a4a,45%,#4c2885,55%,#2d1a4a)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-black ml-4"
            >
              <span className="flex items-center gap-2">
                Book Call
                <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-violet-500/5 hover:bg-violet-500/10 transition-all duration-300 border border-violet-500/10 hover:border-violet-500/20 group"
          >
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <span className={`w-6 h-[2px] bg-gradient-to-r from-violet-400 to-violet-500 rounded-full transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`} />
              <span className={`w-4 h-[2px] bg-gradient-to-r from-violet-400 to-violet-500 rounded-full transform transition-all duration-300 ease-in-out my-[6px] ${
                isMenuOpen ? 'opacity-0 translate-x-2' : 'group-hover:w-6'
              }`} />
              <span className={`w-6 h-[2px] bg-gradient-to-r from-violet-400 to-violet-500 rounded-full transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-violet-500/10 bg-black/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-3">
            {navItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href} 
                active={pathname === item.href}
                icon={item.icon}
                isMobile
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://calendly.com/ghostforcestudio/30min?month=2025-02"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full group inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-violet-500/50 bg-[linear-gradient(110deg,#2d1a4a,45%,#4c2885,55%,#2d1a4a)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="flex items-center gap-2">
                Book Call
                <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ 
  href, 
  children, 
  active, 
  icon,
  isMobile = false 
}: { 
  href: string; 
  children: React.ReactNode; 
  active: boolean;
  icon: string;
  isMobile?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
        isMobile ? 'w-full' : ''
      } ${
        active
          ? 'text-white bg-gradient-to-r from-violet-600/20 via-violet-500/20 to-violet-600/20 border border-violet-500/50 shadow-[inset_0_0_20px_rgba(139,92,246,0.1)] animate-shimmer'
          : 'text-white/70 hover:text-white border border-transparent hover:border-violet-500/20 hover:bg-violet-500/10'
      }`}
    >
      <i className={`fa-solid ${icon} ${
        active ? 'text-violet-400' : 'text-white/50 group-hover:text-violet-400'
      } transition-colors`} />
      <span>{children}</span>
      {active && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600/10 via-violet-500/10 to-violet-600/10 rounded-xl opacity-50 blur-sm" />
      )}
    </Link>
  )
} 