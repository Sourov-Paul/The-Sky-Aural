import React from 'react';
import './Footer.css';



const Footer = () => {
    return (
        <div className='mainFooter'>

            <div className='row m-auto footerRow'>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <h2 className='text-center'>One</h2>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <h2 className='text-center'>two</h2>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <h2 className='text-center'>Three</h2>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;