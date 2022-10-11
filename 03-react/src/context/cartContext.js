import React, { createContext, useEffect, useState } from 'react'
import { discountRules } from '../data/discounts'
import { movies as moviesSeed } from '../data/movies'

export const CartContext = createContext()

export const CartProvider = (prop) => {
  const [movies] = useState(moviesSeed)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addToMovieToCart = (movieId) => {
    const movie = movies.find(movie => movie.id === movieId)
    if (!movie) return

    setCart([...cart, { ...movie, quantity: movie.quantity ?? 1 }])
  }

  const checkRulesDiscount = (moviesId, discountMovies) => discountMovies.every((v) => moviesId.includes(v))

  const getTotal = () => {
    const moviesId = cart.map((cart) => cart.id)
    // get discounts and sum them all
    const discounts = discountRules
      .filter((discount) => checkRulesDiscount(moviesId, discount.m))
      .reduce((acc, rule) => acc + rule.discount, 0)
    // get subtotal of the cart
    const subtotal = cart.reduce((acc, { price, quantity }) => acc + (price * quantity), 0)
    return subtotal - discounts
  }

  const removeMovieFromCart = (movieId) => {
    setCart(
      cart
        .filter(movie => movie.id !== movieId)
    )
  }

  const updateMovieQuantity = (movieId, quantity) => {
    if (quantity <= 0) return removeMovieFromCart(movieId)

    const cartsUpdated = cart.map(movie => movie.id === movieId ? { ...movie, quantity } : movie)
    setCart(cartsUpdated)
  }

  useEffect(() => {
    setTotal(getTotal())
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, movies, addToMovieToCart, updateMovieQuantity, total }}>
        {prop.children}
    </CartContext.Provider>)
}
