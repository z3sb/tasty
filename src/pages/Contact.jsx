import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';

const Contact = () => {
  const submitHendler = e => {
    e.preventDefault()
  }
  return (
    <Helmet title='Contact'>
      <CommonSection title='Contact Us' />
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <form className="checkout__form" onSubmit={submitHendler}>
                <div className="form__group">
                  <input type="text" placeholder='Enter your name'/>
                </div>
                <div className="form__group">
                  <input type="email" placeholder='Enter your email' />
                </div>
                <div className="form__group">
                  <textarea rows={8} type="text" placeholder='Message ....' />
                </div>
                <button className="addToCart__btn">Send</button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Contact