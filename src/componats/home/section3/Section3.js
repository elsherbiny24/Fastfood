import React from 'react';
import './section3.css';
import Img1 from '../../../assets/images/service-01.png';
import Img2 from '../../../assets/images/service-02.png';
import Img3 from '../../../assets/images/service-03.png';
import { Col, Container, Row } from 'react-bootstrap';


const Section3 = () => {
  return (
   <>
   <section className='sec3__service'>
    <Container>
        <Row className='text-center'>
            <Col lg={12} className='text-center text__service'>
                <h5>What we serve</h5>
                <h1>Just sit back at home<br />
                 we will <span>take care</span></h1>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.</p>
            </Col>
        </Row>
        <Row>
            <Col lg={4} md={6} sm={12}>
                <div className='box__servise text-center'>
                    <img src={Img1} alt='' className='Img__service'/>
                    <h5>Quick Delivery</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <div className='box__servise text-center'>
                    <img src={Img2} alt='' className='Img__service'/>
                    <h5>Super Dine In</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <div className='box__servise text-center'>
                    <img src={Img3} alt='' className='Img__service'/>
                    <h5>Easy Pick Up</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
   </>
  )
}

export default Section3