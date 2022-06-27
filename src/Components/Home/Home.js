import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import OurServices from '../OurServices/OurServices';
import Responsive from '../TopProducts/TopProducts';
import './Home.css';


const Home = () => {

   

    return (
        <>
           <div  className='loginContainer'>
        <div className='var1'> </div>
          <div class="d-flex flex-row-reverse">
  <div class="p-2">Sign In</div>
  <div class="p-2">Log In</div>
  <div class="p-2">Help</div>
</div>
          </div>
      
            <Header/>
            <Banner/>
            <About/>
            <Responsive/>
            <br/>
            <OurServices/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;