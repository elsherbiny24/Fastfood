import React, { useEffect, useState } from 'react';
import './section4.css';
import products from '../../../assets/fake-data/products'
import { Col, Container, Row } from 'react-bootstrap';
import Bread from '../../../assets/images/bread.png';
import Pizza from '../../../assets/images/pizza.png';
import Burger from '../../../assets/images/hamburger.png'
import ProductCard from './ProductCard';

const Section4 = ({AddToCart}) => {
    const [product, setproduct] = useState(products)
    const [category , setcategory] = useState("ALL")

    useEffect(() => {
        if (category === 'ALL') {
          setproduct(products);
        } else if (category === 'Pizza') {
          const Filterproduct = products.filter(item => item.category === 'Pizza');
          setproduct(Filterproduct);
        } else if (category === 'Burger') {
          const Filterproduct = products.filter(item => item.category === 'Burger');
          setproduct(Filterproduct);
        } else if (category === 'Bread') {
          const Filterproduct = products.filter(item => item.category === 'Bread');
          setproduct(Filterproduct);
        }
      },[category, products]);
    // console.log(product)
  return (
  <>
  <section className='sec__foodall'>
    <Container>
        <h1 className='text-center'>Popular Foods</h1>
        <Row>
            <div className='foods__all'>
            <button 
    className={category === 'ALL' ? 'Button__active' : ''} 
    onClick={() => setcategory('ALL')}
>
    All
</button>
<button 
    className={category === 'Burger' ? 'Button__active' : ''} 
    onClick={() => setcategory('Burger')}
>
    <img src={Burger} alt='' className='img' />
    <span>burger</span>
</button>
<button 
    className={category === 'Pizza' ? 'Button__active' : ''}
    onClick={() => setcategory('Pizza')}
>
    <img src={Pizza} alt='' className='img' />
    <span>pizza</span>
</button>
<button 
    className={category === 'Bread' ? 'Button__active' : ''} 
    onClick={() => setcategory('Bread')}
>
    <img src={Bread} alt='' className='img' />
    <span>bread</span>
</button>
            </div>
        </Row>
        <Row className='text-center'>
            {product.map((iteam) =>(
                <Col lg={3} md={4} xs={6} key={iteam.id}>
                <ProductCard iteam={iteam} AddToCart={AddToCart}/>
                </Col>
            ))}
            
           
        </Row>
    </Container>
  </section>
  </>
  )
}

export default Section4