import React, {useState, useEffect} from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet.js';
import hero from '../assets/images/hero.png';
import '../styles/hero-section.css'
import { Link } from 'react-router-dom';
import Catagory from '../components/UI/catagory/Catagory.jsx';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';

import products from '../assets/fake-data/products.js';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/Slider/TestimonialSlider.jsx';
import '../styles/home.css';
const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio consectetur accusamus deleniti praesentium magni. In?`,
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio consectetur accusamus deleniti praesentium magni. In?`,
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio consectetur accusamus deleniti praesentium magni. In?`,
  }
]
const Home = () => {
  const [catagory, setCatagory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza)
  }, [])

  useEffect(() => {
    if (catagory === 'ALL') setAllProducts(products);
    if (catagory === 'BURGER') {
      const filteredProducts = products.filter(item => item.category === 'Burger');
      setAllProducts(filteredProducts)
    }
    if (catagory === 'PIZZA') {
      const filteredProducts = products.filter(item => item.category === 'Pizza');
      setAllProducts(filteredProducts)
    }
    if (catagory === 'BREAD') {
      const filteredProducts = products.filter(item => item.category === 'Bread');
      setAllProducts(filteredProducts)
    }
  }, [catagory])

  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero__title'><span>Hungry? </span>Just wait <br /> food at<span> your door</span></h1>
                <p>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipisicing elit. Quas, 
                  delectus natus reiciendis suscipit blanditiis ipsa.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className='order__btn d-flex align-items-center justify-content-between'>Order now <i className="ri-arrow-right-s-line"></i></button>
                  <button className='all__foods-btn'><Link to='/tasty/foods'>See all foods</Link></button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-car-line"></i></span> No shipping charge</p>
                  <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-shield-check-line"></i></span> 100% secure checkout</p>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={hero} alt="Hero-img" className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Catagory />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>We will <span>take care</span></h2>
              <p className='feature__text mb-1 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quae.</p>
              <p className='feature__text '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptatem.</p>
            </Col>
            {
              featureData.map((item, index) => (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                  <div className="feature__item text-center px-5 py-3">
                    <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3' />
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className={`all__btn ${catagory === 'ALL' ? "foodBtnAcitve" : ''}`}          onClick={() => setCatagory("ALL")}>All</button>
                <button className={`d-flex align-items-center gap-2 ${catagory === 'BURGER' ? "foodBtnAcitve" : ''}`} onClick={() => setCatagory("BURGER")}><img src={foodCategoryImg01} alt="food-category" />Burger</button>
                <button className={`d-flex align-items-center gap-2 ${catagory === 'PIZZA' ? "foodBtnAcitve" : ''}`} onClick={() => setCatagory("PIZZA")}><img src={foodCategoryImg02} alt="food-category" />Pizza</button>
                <button className={`d-flex align-items-center gap-2 ${catagory === 'BREAD' ? "foodBtnAcitve" : ''}`} onClick={() => setCatagory("BREAD")}><img src={foodCategoryImg03} alt="food-category" />Bread</button>
              </div>
            </Col>
            {
              allProducts.map((item) => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5' >
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt="why-tasty-treat" className='w-100' />
            </Col>
            <Col lg='6' md='6'>
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">Why <span>Tasty Treat?</span></h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Numquam quas quod qui quibusdam placeat. 
                  Sequi explicabo quos debitis, 
                  blanditiis iste exercitationem consequatur, 
                  ut numquam rerum dolor obcaecati officiis corrupti nobis.
                </p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i> Fresh and tasty foods</p>
                    <p className='tasty__treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ea.</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i> Quality support</p>
                    <p className='tasty__treat-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, ipsam?</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i> Order from any location</p>
                    <p className='tasty__treat-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, ipsam?</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map(item => (
                <Col lg='3' md='4' key={item.id} >
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-4'>What our <span>customers</span> are saying</h2>
                <p className='testimonial__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Quae unde hic libero fugiat voluptatum nihil magnam exercitationem quis aperiam nisi.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt="testimonial-img" className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home