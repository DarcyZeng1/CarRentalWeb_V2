import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Import your logo image
import backgroundImage from '../img/homeCar.jpg';

const Home = () => {

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '10px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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
            <li><Link to= "/Home">Home</Link></li>
            <li><Link to= "/ListOfCars">List of Cars</Link></li>
            <li><a href="/">Locations</a></li>
            <li><Link to= "/Contact">Contact</Link></li>
          </ul>
        </div>
      </nav>


      {/* input section */}
      <div className="input-section">
        {/* <img src={backgroundImage} alt="Car" className="car-image" /> */}
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
    </>
  );
}

export default Home;
