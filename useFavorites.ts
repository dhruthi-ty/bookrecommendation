"use client"

import { useState, useEffect } from 'react'

export function useFavorites<T>(key: string) {
  const [favorites, setFavorites] = useState<T[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const storedFavorites = localStorage.getItem(key)
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites))
      } catch (e) {
        console.error('Failed to parse favorites from localStorage')
      }
    }
    setIsLoaded(true)
  }, [key])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(key, JSON.stringify(favorites))
    }
  }, [favorites, key, isLoaded])

  const addFavorite = (item: T) => {
    setFavorites(prev => [...prev, item])
  }

  const removeFavorite = (item: T) => {
    setFavorites(prev => prev.filter(i => i !== item))
  }

  const toggleFavorite = (item: T) => {
    setFavorites(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item) 
        : [...prev, item]
    )
  }

  const isFavorite = (item: T) => favorites.includes(item)

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    isLoaded
  }
}