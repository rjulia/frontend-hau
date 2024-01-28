'use client'
import { createContext, useState, ReactNode, useEffect, useContext } from 'react'

interface Favorite {
  favorites: number[] | undefined
}

interface FavoriteContextType extends Favorite {
  addFavorite: (id: number) => void
  addFavorites: (ids: number[]) => void
}

const initFavorite: Favorite = {
  favorites: [],
}



const FavoriteContext = createContext<FavoriteContextType>({
  ...initFavorite,
  addFavorite: () => { },
  addFavorites: () => { },
})

const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Favorite>({favorites:[]})

  useEffect(() => {
    
  }, [favorites])

  const addFavorites = (ids: number[]) => {
    setFavorites((prev) => ({
      ...prev,
      favorites: ids,
    }))
  }

  const addFavorite = (id: number) =>
    setFavorites((prev) => ({
      ...prev,
      favorites: prev.favorites ? [...prev.favorites, id] : [id],
    }))

  return (
    <FavoriteContext.Provider
      value={{ ...favorites, addFavorite, addFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

const useFavorite = () => {
  const context = useContext(FavoriteContext)

  if (!context) { throw new Error('useLocale must be used within an OpeningProvider') }

  return context
}

export  {
  FavoriteProvider,
  useFavorite,
}

