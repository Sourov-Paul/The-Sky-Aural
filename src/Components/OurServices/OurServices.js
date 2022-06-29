import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './OurServices.css';

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
      <div className="mainServideStore" >
        <div className="buttonRightLeft d-flex justify-content-between p-5 pb-0 ">
         <div className="titleItem">
         <h2>IN THE SPOTLIGHT</h2>

         </div>
          <div className="nextIcon">
          <button className="button leftBtn" onClick={this.previous}>
            
            <i className="fa-solid fa-angle-left"></i>

          </button>
          <button className="button rightBtn" onClick={this.next}>
          <i className="fa-solid fa-angle-right"></i>
          </button>

          
          </div>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div  key={1}>
<Link to='/check'>
              <img className=' m-1 img-fluid' src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a44e33aa-48ae-4da3-b680-660f76999428/jordan-air-200e-older-shoes-BsnlwW.png' alt='product  ' />

</Link>
          </div>
          <div  key={2}>
<Link to='/check'>
              <img className=' m-1 img-fluid' src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a44e33aa-48ae-4da3-b680-660f76999428/jordan-air-200e-older-shoes-BsnlwW.png' alt='product  ' />

</Link>
          </div>
          <div  key={3}>
<Link to='/check2'>
              <img className=' m-1 img-fluid' src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a44e33aa-48ae-4da3-b680-660f76999428/jordan-air-200e-older-shoes-BsnlwW.png' alt='product  ' />

</Link>
          </div>
          <div  key={4}>
<Link to='/check2'>
              <img className=' m-1 img-fluid' src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a44e33aa-48ae-4da3-b680-660f76999428/jordan-air-200e-older-shoes-BsnlwW.png' alt='product  ' />

</Link>
          </div>
          <div  key={5}>
<Link to='/check'>
              <img className=' m-1 img-fluid' src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a44e33aa-48ae-4da3-b680-660f76999428/jordan-air-200e-older-shoes-BsnlwW.png' alt='product  ' />

</Link>
          </div>
          <div  key={6}>
<Link to='/check'>
              <img className=' m-1 img-fluid' src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a44e33aa-48ae-4da3-b680-660f76999428/jordan-air-200e-older-shoes-BsnlwW.png' alt='product  ' />

</Link>
          </div>
        </Slider>
       
      </div>
      </div>
    );
  }
}