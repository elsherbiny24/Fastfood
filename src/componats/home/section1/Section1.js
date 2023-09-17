import React from "react";
import "./section1.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroimg from '../../../assets/images/hero.png'

const Section1 = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={6} md={6} sm={12}>
            <div className="parent__text">
              <h4>Easy way to make an order</h4>
              <h1><span>HUNGRY?</span> Just wait<br /> food at <span>your door</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</p>
              <div className="parent__btn">
                <button className="btn__order">order now</button>
                <button className="btn__allfoods"><Link to='/foods' className="link__foods">see all foods</Link></button>
              </div>
              <div className="parent__icons">
                <p><span></span>No shipping charge</p>
                <p><span></span>100% secure checkout</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <img src={heroimg} alt="" className="hero__img w-200"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
