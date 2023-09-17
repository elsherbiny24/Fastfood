import React, { useEffect, useState } from 'react';
import './section5.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../../../assets/fake-data/products'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../shopping-cart/Cartslice';
import {addItem} from '../../shopping-cart/Cartslice';

const Section5 = ({AddToCart}) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItem({}));
    // console.log("erorr")
  };
    const [hotPizza , SetHotpizza] = useState([])
    useEffect(() => {
    const FillterPizza = products.filter(iteam => iteam.category==="Pizza")
    SetHotpizza(FillterPizza)
    },[])
  return (
   <>
   <section className='Hot__Pizza'>
    <Container>
        
        <Row>
            <Col lg={12} className='text-center'>
                <h1 className='tittle__Hotpizza'>Hot Pizza</h1>
            </Col>
            <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
             navigation
             pagination={{ clickable: true }}
             autoplay={{delay:1500}}
            breakpoints={{
                0:{
                  slidesPerView:2,
                  spaceBetween:10,
                },
                400:{
                  slidesPerView:2,
                  spaceBetween:10,
                },
                768:{
                  slidesPerView:3,
                  spaceBetween:15,
                },
              1280:{
                  slidesPerView:4,
                  spaceBetween:20,
                }
              }}
            >
            <Col lg={12} className='text-center'>
                <h1 className='tittle__Hotpizza'>Hot Pizza</h1>
            </Col>
          {hotPizza.map((iteam) => (
            <SwiperSlide>
                <div className='product__pizza' key={iteam.id}>
            <div className='product__img'>
                <img src={iteam.image01} className='img__pizza' alt=''/>
                </div>
                <h5 className='h5__link'><Link to={`/food/${iteam.id}`} className='link'>{iteam.title}</Link></h5>
                 <div className='item__price'>
                   <p>${iteam.price}</p>
                  <button className='btn__ADDtocart' onClick={addToCartHandler}>Add To Cart</button>
             </div>
            </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </Row>
    </Container>
   </section>
   </>
  )
}

export default Section5