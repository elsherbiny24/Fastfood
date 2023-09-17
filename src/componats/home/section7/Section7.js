import React from "react";
import "./section7.css";
import { Col, Container, Row } from "react-bootstrap";
import person1 from '../../../assets/images/ava-1.jpg';
import person2 from '../../../assets/images/ava-2.jpg';
import person3 from '../../../assets/images/ava-3.jpg';
import Network from '../../../assets/images/network.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Section7 = () => {
  return (
    <>
      <section className="sec__customer">
        <Container>
          <Row className="customer__row">
            <Col lg={7} md={6} sm={12}>
              <div className="text__customer">
                <h6 className="h6">Testimonial</h6>
                <h1>What our <span>customers</span> are saying</h1>
                <p className="p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>
                <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
             navigation
             pagination={{ clickable: true }}
             autoplay={{delay:1500}}
            breakpoints={{
                0:{
                  slidesPerView:1,
                  spaceBetween:10,
                },
                400:{
                  slidesPerView:1,
                  spaceBetween:10,
                },
                768:{
                  slidesPerView:1,
                  spaceBetween:15,
                },
              1280:{
                  slidesPerView:1,
                  spaceBetween:20,
                }
              }}
            >
                <SwiperSlide>
                <div className="customer">
                <p className="p__customer">
                
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>
                <div className="box__img d-flex align-items-center ">
                <img src={person1} alt="" className="Img__person"/>
                <h6>jkon doe</h6>
               </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="customer">
                <p className="p__customer">
                
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                  
                </p>
                <div className="box__img d-flex align-items-center ">
                <img src={person3} alt="" className="Img__person"/>
                <h6>jkon doe</h6>
               </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="customer">
                <p className="p__customer">
                
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                  
                </p>
                <div className="box__img d-flex align-items-center ">
                <img src={person2} alt="" className="Img__person"/>
                <h6>jkon doe</h6>
               </div>
                </div>
                </SwiperSlide>
                </Swiper>
              </div>
            </Col>
            <Col lg={5} md={6} sm={12}>
                <img src={Network} alt="" className="Img__network"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section7;
