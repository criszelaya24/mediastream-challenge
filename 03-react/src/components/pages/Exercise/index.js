import './assets/styles.css'
import React, { useContext } from 'react'
import { CartContext } from '../../../context/cartContext'
import Movie from '../../Movies'
import Cart from '../../Cart'

export default function Exercise01 () {
  const { movies, cart, addToMovieToCart, updateMovieQuantity, total } = useContext(CartContext)

  return (
    <>
      <section className="exercise01">
      <div className="movies__list">
        <ul>
          {movies.map(movie => (
            <Movie
                key={movie.id}
                id={movie.id}
                name= {movie.name}
                price= {movie.price}
                addToMovieToCart = { addToMovieToCart }
            />
          ))}
        </ul>
      </div>
      <div className="movies__cart">
        <ul>
          {cart.map(movie => (
            <Cart
            key={movie.id}
            id={movie.id}
            name= {movie.name}
            price= {movie.price}
            quantity = { movie.quantity }
            updateMovieQuantity={ updateMovieQuantity }
            />
          ))}
        </ul>
        <div className="movies__cart-total">
          <p>Total: ${total}</p>
        </div>
      </div>
    </section>
    </>
  )
}
