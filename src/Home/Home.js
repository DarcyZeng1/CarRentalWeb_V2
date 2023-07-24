import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Import your logo image
import backgroundImage from '../img/homeCar.jpg';

const Home = () => {

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={containerStyle}>
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


      {/* input section */}
      <div className="input-section" style={{ backgroundColor: "white", padding: "20px" }}>
        <h1>Car Rental in Ottawa</h1>
        <div className="input-group">
          <input type="text" placeholder="Pickup Address" className="input-field" />
          <input type="date" className="input-field" />
          <input type="time" className="input-field" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Return Location" className="input-field" />
          <input type="date" className="input-field" />
          <input type="time" className="input-field" />
        </div>

        <div>
          <Link to= "/Booking">
            <button className="find-car-btn">Find a Car</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
