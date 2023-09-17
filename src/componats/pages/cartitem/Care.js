import React, { useState } from 'react'
import './cart.css'
import { ListGroup } from 'react-bootstrap'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { CartuiActions } from './Cartui';

const Care = () => {
    const dispatch = useDispatch()
    const toggle__Cart=() =>{
        dispatch(CartuiActions.toggle())
    }
   
    const Cartproducts = useSelector((state)=> state.cart.cartItem)
    const Total__price = useSelector(state => state.cart.totalAmount)
   
  return (
   <>
   <div className='cart__containe'>
    <ListGroup className='cart'>
        <div className='cart__close'>
         <span onClick={toggle__Cart}>x</span>
        </div>
        <div className='cart__item__list'>

        {Cartproducts.length === 0 ? (
   <h6 className="text-center h6__cart">No item added to the cart</h6>
) : (
   Cartproducts.map((item, index) => (
      <CartItem item={item} key={index} />
   ))
)}
            
            
        </div>
        <div className='cart__buttons'>
            <h6 className='Subtotal'>Subtotal: <span className='span__cart__btn'>${Total__price}</span></h6>
            <button className='btn__cart'><Link>check out</Link></button>
        </div>
    </ListGroup>
   </div>
   </>
  )
}

export default Care