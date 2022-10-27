import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import '../../../styles/slider.css'

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      <div className='slider__content'>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ab quo. 
          Cumque ab quos mollitia ratione alias asperiores, eos harum, 
          praesentium a atque eum voluptates vero iusto iste optio corporis?"
        </p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava01} alt="Avatar" className='rounded' />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div  className='slider__content'>
      <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ab quo. 
          Cumque ab quos mollitia ratione alias asperiores, eos harum, 
          praesentium a atque eum voluptates vero iusto iste optio corporis?"
        </p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava02} alt="Avatar" className='rounded' />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div className='slider__content'>
      <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ab quo. 
          Cumque ab quos mollitia ratione alias asperiores, eos harum, 
          praesentium a atque eum voluptates vero iusto iste optio corporis?"
        </p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava03} alt="Avatar" className='rounded' />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  )
}

export default TestimonialSlider