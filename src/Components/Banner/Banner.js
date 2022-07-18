import React, { useEffect, useRef } from 'react';
import './Banner.css';


const Banner = () => {
    const videoEl = useRef(null);
   
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

    return (
      
      <div className=''>


<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <img src="https://image.shutterstock.com/image-photo/flat-lay-workspace-desk-stationery-260nw-1478678966.jpg" className="d-block w-100" alt="..."/> */}
    </div>
    <div className="carousel-item">
      {/* <img src="https://source.unsplash.com/1528x600/?headphone,iphone" className="d-block w-100" alt="..."/> */}
    </div>
    <div className="carousel-item">
      {/* <img src="https://source.unsplash.com/1528x600/?iphone,headphone" className="d-block w-100" alt="..."/> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



      </div>
    );
};

export default Banner;