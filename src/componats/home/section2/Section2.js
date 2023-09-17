import React from 'react';
import './section2.css';
import { Container, Row , Col } from 'react-bootstrap';
import Imgfood1 from '../../../assets/images/category-01.png';
import Imgfood2 from '../../../assets/images/category-02.png';
import Imgfood3 from '../../../assets/images/category-03.png';
import Imgfood4 from '../../../assets/images/category-04.png';


const Section2 = () => {
  return (
   <>
   <section className='food__sec2'>
    <Container>
        <Row>
            <Col lg={3} md={6}>
                <div className='box__food'>
                <img src={Imgfood1} alt='' className='img__food'/>
                <h5>Fast food</h5>
                </div>
            </Col>
            <Col lg={3} md={6}>
                <div className='box__food'>
                <img src={Imgfood2} alt='' className='img__food'/>
                <h5>Pizza</h5>
                </div>
            </Col>
            <Col lg={3} md={6}>
                <div className='box__food' >
                <img src={Imgfood3} alt='' className='img__food'/>
                <h5>Asian Food</h5>
                </div>
            </Col>
            <Col lg={3} md={6}>
                <div className='box__food' >
                <img src={Imgfood4} alt='' className='img__food'/>
                <h5>Row Meat</h5>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
   </>
  )
}

export default Section2