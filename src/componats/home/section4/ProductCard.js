import React from 'react';
import './productcart.css'
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../shopping-cart/Cartslice';
import {addItem} from '../../shopping-cart/Cartslice';

const ProductCard = (props) => {
    const {id , title , image01, price} = props.iteam
    const dispatch = useDispatch();

    const addToCartHandler = () => {
      dispatch(cartActions.addItem({
        id,
        title,
        image01,
        price,
      }));
      // console.log("erorr")
    };
  return (
    <>
    <div className='product__item'>
        <div className='product__img'>
            <img src={image01} alt='' className='img__product'/>
        </div>
        <h5 className='h5'><Link to={`/food/${id}`} className='link'>{title}</Link></h5>
        <div className='item__price'>
            <p>${price}</p>
            <button className='btn__ADDtocart' onClick={addToCartHandler}>Add To Cart</button>
        </div>
    </div>
    </>
  )
}

export default ProductCard