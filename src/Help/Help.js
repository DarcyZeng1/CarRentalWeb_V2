import React from 'react';
import './Help.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; 


const Help = () => {
  
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
            <li className = "navElem"><Link to= "/Contact">Contact</Link></li>
            <li className = "navElem"><Link to= "/Help">Help</Link></li>
          </ul>
        </div>
      </nav>

        <div className = "HelpInfo">
            <h1>Help & FAQs</h1>
            <h2>How do I rent a car?</h2>
            <p>First, select the car you want to rent from our list of available cars. Then, choose your rental options and confirm your booking.</p>
            <h2>What are the available rental options?</h2>
            <p>We offer a variety of rental options, including baby seats, mobile WiFi, and loss damage waiver.</p>
            <h2>Can I change my booking?</h2>
            <p>Yes, you can modify your booking by contacting our customer service.</p>
        </div>
  
      </>
    );
  }
  
  export default Help;
