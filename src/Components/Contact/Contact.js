import React from 'react';
import './Contact.css';
import Slide from 'react-reveal/Slide';


const Contact = () => {
    return (
        <div className='mainContactForm'>
            <Slide left>
            <div className="containerContact">

<h1 className="brand pt-5 mt-5"><span>Contact Us</span></h1>

<div className="wrapper">

    <div className="company-info">
        <h3>The Skay Aural</h3>

        <ul>
            <li><i className="fa fa-road"></i> India</li>
            <li><i className="fa fa-phone"></i> (555) 555-5555</li>
            <li><i className="fa fa-envelope"></i> test@test.com</li>
        </ul>
    </div>

    <div className="contact">
        <h3>E-mail Us</h3>

        <form id="contact-form">

            <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required />
            </p>

            <p>
                <label>Company</label>
                <input type="text" name="company" id="company" />
            </p>

            <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required />
            </p>

            <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone"/>
            </p>

            <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
            </p>

            <p className="full">
                <button type="submit">Submit</button>
            </p>

        </form>
    </div>

</div>
</div>
</Slide>
        </div>
    );
};

export default Contact;