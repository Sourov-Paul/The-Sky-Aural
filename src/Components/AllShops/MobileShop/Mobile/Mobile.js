import React from 'react';
import './Mobile.css';



const Mobile = (props) => {

    const{
        mobileName,
        mobileTitle,
        mobilePrice1,
        mobilePrice2,
        mobileRam1,
        mobileRam2,
        mobileColor1,
        mobileColor2,
        mobileImg1Link,
        mobileImg2Link,
        mobileVideoLink,
        
    }=props.product
console.log(props.product)




    return (
        <div>
 <div className="wrapper">
 <div className="container">
        <div className="card">
          <section className="photo">
            <div className="food-img">
              <figure>
                <img
                  src={mobileImg1Link}
                  alt="food"
                />
              </figure>
            </div>
            <div className="info">
              <figure>
                <img
                  src="https://i.postimg.cc/021SDBn5/info.png"
                  alt="information"
                />
              </figure>
            </div>
          </section>
          <section className="main">
            <div className="main-container">
              <div className="header">
                <span className="span-head">{mobileName}</span>
               
              </div>
              <div className="about-food">
                <p className="p-light">
                {mobileTitle}
                </p>
              </div>
              <div className="features">
                <span className="span-light">{mobileRam1} GB RAM</span>
                <span className="span-light">{mobileRam2} GB RAM</span>
                <span className="span-light">Color:{mobileColor1}</span>
              </div>
              <div className="footer">
                <div className="price">
                <span className="span-bold">${mobilePrice2}</span>
                  <span className="span-red"><del>${mobilePrice1}</del></span>
                </div>
                <a target="blank" href={mobileVideoLink}><i class="fa-solid fa-circle-play"></i></a>
                <div className="btn">
                  <button onClick={()=>props.handleAddToCart(props.product)}>ADD TO CART</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Mobile;