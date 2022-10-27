import React, {useRef} from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const submitHandler = e => {
    e.preventDefault();
  }
  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center' >
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="email" placeholder='Email' required ref={emailRef} />
                </div>
                <div className="form__group">
                  <input type="password" placeholder='Password' required ref={passwordRef} />
                </div>
                <button type="submit" className='addToCart__btn'>Login</button>
              </form>
              <p>Don't have an account? <Link to='/tasty/register'>Create an account</Link></p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login