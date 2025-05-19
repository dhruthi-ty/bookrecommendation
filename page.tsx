"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { books } from '@/data/books'
import BookGrid from '@/components/books/BookGrid'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function FavoritesPage() {
  const [favoriteBooks, setFavoriteBooks] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>("title")

  useEffect(() => {
    // Load favorites from localStorage
    const storedFavorites = localStorage.getItem('bookFavorites')
    if (storedFavorites) {
      setFavoriteBooks(JSON.parse(storedFavorites))
    }
  }, [])

  // Filter books to only show favorites
  const filteredBooks = books.filter(book => favoriteBooks.includes(book.id))

  // Sort books
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title)
    } else if (sortBy === 'author') {
      return a.author.localeCompare(b.author)
    } else if (sortBy === 'year') {
      return b.year - a.year
    } else if (sortBy === 'rating') {
      return b.rating - a.rating
    }
    return 0
  })

  return (
    <main className="flex-1 pt-24">
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">My Favorites</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your personal collection of favorite books. Add or remove books from your favorites list.
            </p>
          </motion.div>

          <div className="flex justify-end mb-8">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Sort by Title</SelectItem>
                <SelectItem value="author">Sort by Author</SelectItem>
                <SelectItem value="rating">Sort by Rating</SelectItem>
                <SelectItem value="year">Sort by Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {sortedBooks.length > 0 ? (
            <BookGrid books={sortedBooks} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <h2 className="text-2xl font-semibold mb-2">No Favorite Books Yet</h2>
              <p className="text-muted-foreground">
                Start adding books to your favorites by clicking the heart icon on any book card.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
} 