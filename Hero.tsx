"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToBooks = () => {
    const booksSection = document.getElementById('books')
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Your Next <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-2">Favorite Read!</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         From thrillers to timeless classics, explore books that inspire. 
         Filter your way through genres and build a shelf of personal favorites.


        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" onClick={scrollToBooks} className="relative overflow-hidden group">
            <span className="relative z-10">Explore Books</span>
            <span className="absolute inset-0 w-full h-full bg-primary/20 rounded-full scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100" />
          </Button>
          <Button size="lg" variant="outline" className="relative overflow-hidden group">
            <span className="relative z-10">Create Account</span>
            <span className="absolute inset-0 w-full h-full bg-primary/10 rounded-full scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100" />
          </Button>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10"
        >
          <motion.button
            onClick={scrollToBooks}
            className="flex flex-col items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
        
        {/* Floating bubble animations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/10 animate-bubble"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}