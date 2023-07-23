import React from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Import your logo image
import { useState } from 'react';


export function Booking(){

    const [sortingOrder, setSortingOrder] = useState('asc');
    const [carList, setCarList] = useState([
        { id: 1, price: 100 },
        { id: 2, price: 150 },
        { id: 3, price: 120 },
        // Add more cars here
    ]);

    const sortCarsByPrice = () => {
        const sortedCars = [...carList].sort((a, b) => {
            if (sortingOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setCarList([...sortedCars]);
        setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc');
    };

    // setup the step content
    const step1Content = (
        <h1>Step 1 Content</h1>
    );

    const step2Content = (
        <div>
            <h1>Step 2 Content</h1>
            <div className="car-list">
                <h2>List of Cars</h2>
                <ul>
                {carList.map((car) => (
                    <li key={car.id}>
                    <span>Car ID: {car.id}</span>
                    <span>Price: ${car.price}/day</span>
                    </li>
                ))}
                </ul>
            </div>
            <button onClick={sortCarsByPrice}>Sort by Price</button>
        </div>
    );

    const step3Content = (
        <h1>Step 3 Content</h1>
    );
    
    const step4Content = (
        <h1>Step 4 Content</h1>
    );
    
    // setup step validators, will be called before proceeding to the next step
    function step2Validator() {
        // return a boolean
        return true;
    }
    
    function step3Validator() {
        // return a boolean
        return true;
    }

    function step4Validator() {
        // return a boolean
        return true;
    }
    
    function onFormSubmit() {
        // handle the submit logic here
        // This function will be executed at the last step
        // when the submit button (next button in the previous steps) is pressed
    }

    return(
        <div>
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

            {/* <StepProgressBar
            startingStep={1}
            onSubmit={onFormSubmit}
            steps={[
                {
                    label: 'Step 1',
                    subtitle: 'Pick up location and time',
                    name: 'step 1',
                    content: step1Content
                },
                {
                    label: 'Step 2',
                    subtitle: 'Select a Car',
                    name: 'step 2',
                    content: step2Content,
                    validator: step2Validator
                },
                {
                    label: 'Step 3',
                    subtitle: 'Rental Options',
                    name: 'step 3',
                    content: step3Content,
                    validator: step3Validator
                },
                {
                    label: 'Step 4',
                    subtitle: 'Your Information',
                    name: 'step 4',
                    content: step4Content,
                    validator: step4Validator
                },
            ]}
            />; */}
        </div>
    )
}

export default Booking;