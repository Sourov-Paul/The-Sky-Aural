import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Responsive from '../TopProducts/TopProducts';
import Footer from '../../Shared/Footer/Footer';
import './Home.css';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/useAuth';
import OurServices from '../OurServices/OurServices';




const Home = () => {

  const {user ,logOut}=UseAuth()
 
    return (
        <>
        <button onClick={logOut}>Logout</button>
           <div  className='loginContainer'>
        <h1 className='text-center'>{user?.email}</h1>
        <div className='var1'> </div>

          <div className="d-flex flex-row-reverse">
  <div className="p-2">
    <Link to='/signup'>Sign In</Link>
  </div>
  <div className="p-2">
    <Link to='/login'>Login</Link>
    
    </div>
  <div className="p-2">Help</div>
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