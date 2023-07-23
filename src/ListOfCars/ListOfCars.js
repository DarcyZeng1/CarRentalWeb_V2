import React from 'react';
import './ListOfCars.css';
import logo from '../img/logo.png'; // Import your logo image
import { Link } from 'react-router-dom';
import { useState } from 'react';

// import StepProgressBar from 'react-step-progress';
// import 'react-step-progress/dist/index.css';

const ListOfCars = () => {

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
      <nav className="navbar">
        <div className="left">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="company-name">Car Rental</h1>
        </div>
        <div className="right">
          <ul>
            <li><Link to= "/Home">Home</Link></li>
            <li><Link to= "/ListOfCars">List of Cars</Link></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div>+++++++++++++++++++++ </div>

      <div>
        {!currentPage && (
          <>
            <div>
              <p>Car 1</p>
              <button onClick={handleClickButton1}>Button 1</button>
            </div>

            <div>
              <p>Car 2</p>
              <button onClick={handleClickButton2}>Button 2</button>
            </div>
          </>
        )}
        {/* Show Car content */}
        {currentPage}
        {currentPage && (
          <div>
            <button onClick={handleClickButtonNull}>Back</button>
          </div>
        )}
      </div>
    </>
  );
}

export default ListOfCars;
