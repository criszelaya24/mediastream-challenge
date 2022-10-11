import React from 'react'
import PropTypes from 'prop-types'

const Movie = ({ id, name, price, addToMovieToCart }) => {
  return (
    <li className="movies__list-card">
    <ul>
      <li>ID: {id}</li>
      <li>Name: {name}</li>
      <li>Price: ${price}</li>
    </ul>
    <button onClick={() => addToMovieToCart(id)}>
      Add to cart
    </button>
  </li>
  )
}

Movie.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  addToMovieToCart: PropTypes.func
}

export default Movie
