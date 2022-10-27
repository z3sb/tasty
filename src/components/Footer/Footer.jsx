import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import logo from "../../assets/images/res-logo.png";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit.
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p>Location: Iraq, Baghdad</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone +9647727599259</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: oslvuao@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your email' />
              <span><i className="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>Copyright - 2022, website made by haiderfadel.tk</p>
          </Col>
          <Col lg='6' md='6' >
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow: </p>
              <span> <Link to='https://www.facebook.com/profile.php?id=100044635810599'><i className="ri-facebook-line"></i></Link> </span>
              <span> <Link to='https://www.github.com/z3sb'><i className="ri-github-line"></i></Link> </span>
              <span> <Link to='https://www.instagram.com/z3.sb'><i className="ri-instagram-line"></i></Link> </span>
              <span> <Link to='https://www.linkedin.com/in/haider-xr-a0581523b/'><i className="ri-linkedin-line"></i></Link> </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer