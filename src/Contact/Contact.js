import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Import your logo image
import { useState } from 'react';

const Contact = () => {
  
    return (
      <>
        {/*navbar section */}
      <nav className="navbar">
        <div className="left">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="company-name">Car Rental</h1>
        </div>
        <div className="right">
          <ul>
            <li className = "navElem"><Link to= "/Home">Home</Link></li>
            {/* <li className = "navElem"><Link to= "/ListOfCars">List of Cars</Link></li> */}
            <li className = "navElem"><Link to= "/Contact">Contact</Link></li>
            <li className = "navElem"><Link to= "/Help">Help</Link></li>
          </ul>
        </div>
      </nav>


        <div className = "ContactInfo">
          <h1>Contact Information</h1>
          <p>Store 1: 123 Fake Street, Anytown, Anystate</p>
          <p>Store 2: 456 Fiction Road, Somecity, Someprovince</p>
          <p>Store 3: 789 Imaginary Blvd, Othercity, Otherstate</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@carrental.com</p>
          <p>Hours: Monday - Friday, 9:00 AM - 9:00 PM</p>
        </div>
  
      </>
    );
  }
  
  export default Contact;