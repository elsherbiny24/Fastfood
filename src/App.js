

import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componats/home/Home'
import Navbars from './componats/navbars/Navbars'
import Footer from './componats/footer/Footer'
import products from './assets/fake-data/products'
import Care from './componats/pages/cartitem/Care'
import { useSelector } from 'react-redux'

const App = () => {
  
  const [product, setProduct] = useState([products]);
  //add to cart
const [cart, setCart] = useState([]);

const AddToCart = (product) => {
  const itemExist = cart.find((x) => x.id === product.id);
  if (itemExist) {
    alert('This product is already in your cart');
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
    alert('Product has been added to your cart');
  }
};

const cartQuantity = cart.reduce((qty, x) => {
  return qty + x.qty;
}, 0);
const Show__Cart = useSelector(state => state.cartui.cartVisible)

  return (
  <>
   <BrowserRouter>
   <Navbars cartQuantity={cartQuantity}/>
   {Show__Cart &&  <Care />}
  
   <Routes>
    <Route path='/' element={<Home AddToCart={AddToCart}/>}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  </>
  )
}

export default App
