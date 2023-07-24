import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Import your logo image
import { useState } from 'react';

const Contact = () => {

    const Car1 = () => (
      <div>
        <h2>Page 1</h2>
        <p>This is the content for Page 1.</p>
      </div>
    );
  
    const Car2 = () => (
      <div>
        <h2>Page 2</h2>
        <p>This is the content for Page 2.</p>
      </div>
    );
  
    const [currentPage, setCurrentPage] = useState(null);
  
    const handleClickButtonNull = () => {
      setCurrentPage(null);
    };
  
    const handleClickButton1 = () => {
      setCurrentPage(<Car1 />);
    };
  
    const handleClickButton2 = () => {
      setCurrentPage(<Car2 />);
    };
  
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
            <li className = "navElem"><Link to= "/ListOfCars">List of Cars</Link></li>
            <li className = "navElem"><Link to= "/Home">Location</Link></li>
            <li className = "navElem"><Link to= "/Contact">Contact</Link></li>
          </ul>
        </div>
      </nav>


        <div className = "ContactInfo">
            
            <h1>Contact Information</h1>
        </div>
  
      </>
    );
  }
  
  export default Contact;