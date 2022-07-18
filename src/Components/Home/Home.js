import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Responsive from '../TopProducts/TopProducts';
import Footer from '../../Shared/Footer/Footer';
import OurServices from '../OurServices/OurServices';
import ScrollToTop from 'react-scroll-to-top';
import MainHeader from '../MainHeader/MainHeader';
import Header from '../../Shared/Header/Header';
import './Home.css';




const Home = () => {
 
    return (
        <>
                 <ScrollToTop smooth color="#6f00ff" />

 
            <div className='headerde'> 
            {/* <MainHeader/> */}
             </div>
            <div className='header2f'>
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