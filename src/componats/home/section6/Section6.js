import React from "react";
import "./section6.css";
import { Container, Row, Col } from "react-bootstrap";
import ImgTresty from "../../../assets/images/location.png";
const Section6 = () => {
  return (
    <>
      <section className="Tast__Treat">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={ImgTresty} alt="" className="Img__location" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="text__treat">
                <h1>
                  Why <span>Tasty Treat?</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>
                <h5><span></span>Fresh and tasty foods</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                <h5><span></span>Quality support</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
                <h5><span></span>Order from any location</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section6;
