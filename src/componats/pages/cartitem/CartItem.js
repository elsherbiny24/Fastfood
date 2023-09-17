import React from 'react';
import './caetitem.css'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import burger from '../../../assets/images/product_01.1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../shopping-cart/Cartslice';

const CartItem = ({item}) => {
  const { id, price, title, image01, quantity, totalprice } = item;
  const dispatch = useDispatch()
  const incerment = () =>{
    dispatch(cartActions.addItem({
      id,
      price,
      title,
      image01
    }))
  }
  const Decriment = () => {
    dispatch(cartActions.removeItem(id))
  }
  const Delet__Item =() =>{
    dispatch(cartActions.DeletItem(id))
  }
  const Total__price = useSelector(state => state.cart.totalAmount)
  return <ListGroupItem className='group__item'>
    <div className='cart__product__info'>
        <img src={image01} alt={`${title} product`} className='Img__product'/>
        <div className='cart__item__info'>
            <div className='burger'>
                <h6 className='title__burger'>{title}</h6>
                <p className='pp'>{quantity}x <span className='price__item'>${totalprice}</span></p>
                <div className='div__span'>
                    <span className='span' onClick={incerment}>+</span>
                    <span>{quantity}</span>
                    <span className='span span2' onClick={Decriment}>-</span>
                </div>
            </div>
            <span className='close' onClick={Delet__Item}>x</span>
        </div>
    </div>
  </ListGroupItem>
};

export default CartItem