import React, { useEffect, useRef, useCallback } from 'react';
import './navbars.css';
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/res-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { BsBasket } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { CgMenuRightAlt } from 'react-icons/cg';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { CartuiActions } from '../pages/cartitem/Cartui';

const Navbars = ({cartQuantity}) => {
  const totalquantity = useSelector(state=> state.cart.totalquantity)
  const NavRef = useRef();
  
  const createHeaderRef = useCallback(() => {
    return document.querySelector('header');
  }, []);

  const dispath = useDispatch()
  const toggle__Cart =() =>{
    dispath(CartuiActions.toggle())
  }

  const HeaderRef = useRef(createHeaderRef());

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY > 0) {
        HeaderRef.current.classList.add('shadow');
      } else {
        HeaderRef.current.classList.remove('shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [HeaderRef]);

  const nav__links = [
    {
      display: 'Home',
      path: '/',
    },
    {
      display: 'Foods',
      path: '/foods',
    },
    {
      display: 'Cart',
      path: '/cart',
    },
    {
      display: 'Contact',
      path: '/contact',
    },
  ];

  const Toggle__menu = () => {
    NavRef.current.classList.toggle('menu__block');
  };

  return (
    <>
      <header className="header" ref={HeaderRef}>
        <Container className="contant">
          <div className="logo__parent">
            <img src={logo} alt="" className="logo" />
            <h5 className="logo__tittle">Tasty Treat</h5>
          </div>
          <div className="nav__parent" ref={NavRef}>
            <div className="nav__item">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) => navClass.isActive ? 'active__menu' : ''}
                  onClick={Toggle__menu}>
                  {item.display}
                </NavLink>
              ))}
              <span className="close" onClick={Toggle__menu}><AiFillCloseCircle /></span>
            </div>
          </div>
          <div className="right__nav">
            <div className="parent__icons">
              <BsBasket className="icons" onClick={toggle__Cart}/>
              <span className="number">{totalquantity}</span>
            </div>
            <Link to="login" className="link__user"><BiUser /></Link>
            <CgMenuRightAlt className="menue" onClick={Toggle__menu} />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navbars;