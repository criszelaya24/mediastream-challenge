import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Exercise from './components/pages/Exercise'
import { CartProvider } from './context/cartContext'

function App () {
  return (
    <CartProvider>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Exercise} exact />
      </Switch>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
