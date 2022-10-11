import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({ id, name, price, updateMovieQuantity, quantity }) => {
  return (
    <>
      <li className="movies__cart-card" key={id}>
        <ul>
            <li>
                ID: {id}
            </li>
            <li>
                Name: {name}
            </li>
            <li>
                Price: ${price}
            </li>
        </ul>
        <div className="movies__cart-card-quantity">
            <button onClick={() => updateMovieQuantity(id, quantity - 1)}>
                -
            </button>
            <span>
                {quantity}
            </span>
            <button onClick={() => updateMovieQuantity(id, quantity + 1)}>
                +
            </button>
            </div>
        </li>
    </>
  )
}

Cart.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  updateMovieQuantity: PropTypes.func
}

export default Cart
