import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import PreviousNextMethods from '../OurServices/OurServices';
import Responsive from '../TopProducts/TopProducts';
import Footer from '../../Shared/Footer/Footer';
import './Home.css';




const Home = () => {

 
    return (
        <>
           <div  className='loginContainer'>
        <div className='var1'> </div>
          <div className="d-flex flex-row-reverse">
  <div className="p-2">Sign In</div>
  <div className="p-2">Log In</div>
  <div className="p-2">Help</div>
</div>
          </div>
      
            <Header/>
            <Banner/>
            <About/>
            <Responsive/>
            <br/>
            <PreviousNextMethods/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;