"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { SearchIcon, MenuIcon, X, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen className="h-8 w-8 text-primary" />
          </motion.div>
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }} 
            className="font-serif font-bold text-xl md:text-2xl tracking-tight"
          >
            BookRack
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#books" className="text-sm font-medium transition-colors hover:text-primary">
            Explore
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Favorites
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative overflow-hidden">
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
            <span className="absolute inset-0 w-full h-full bg-primary/10 rounded-full scale-0 transition-transform duration-300 ease-in-out hover:scale-100" />
          </Button>
          <Button className="hidden md:flex relative overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 w-full h-full bg-primary/20 rounded-full scale-0 transition-transform duration-300 ease-in-out hover:scale-100" />
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            <span className="absolute inset-0 w-full h-full bg-primary/10 rounded-full scale-0 transition-transform duration-300 ease-in-out hover:scale-100" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/95 backdrop-blur-sm"
          >
            <div className="container py-4 flex flex-col space-y-4">
              <Link 
                href="/" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#books" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                href="#" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Favorites
              </Link>
              <Link 
                href="#" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Button className="mt-2">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}