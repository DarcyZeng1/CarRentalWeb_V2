import React from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; 
import { useState } from 'react';
import car2 from '../img/homeCar.jpg';

const Booking = () =>  {

    const cars = [
        {
            id: 1,
            name: 'Model S',
            brand: 'Tesla',
            priceToRent: 100,
            imageUrl: car2,
            seats: 5,
            doors: 4,
            mpg: 120,
            smokeFree: true,
            transmission: 'automatic'
        },
        {
            id: 2,
            name: 'Model 3',
            brand: 'Tesla',
            priceToRent: 80,
            imageUrl: car2,
            seats: 5,
            doors: 4,
            mpg: 130,
            smokeFree: true,
            transmission: 'automatic'
        },
        {
            id: 3,
            name: 'F150',
            brand: 'Ford',
            priceToRent: 70,
            imageUrl: car2,
            seats: 4,
            doors: 2,
            mpg: 80,
            smokeFree: true,
            transmission: 'manual'
        },
        // ... other cars 
        // ... other cars
    ];    


    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [minSeats, setMinSeats] = useState(0);


    const [selectedCar, setSelectedCar] = useState(null);
    const [detailsCarId, setDetailsCarId] = useState(null);
    // Use a state variable to hold the ID of the selected car
    const [selectedCarId, setSelectedCarId] = useState(null);

    const [selectedOptions, setSelectedOptions] = useState({
        babySeat: false,
        mobileWifi: false,
        lossDamageWaiver: false
    });

    const [options, setOptions] = useState({
        babySeat: false,
        mobileWifi: false,
        lossDamageWaiver: false
    });
    
    const totalOptionsPrice = 
    (options.babySeat ? 0 : 0) +
    (options.mobileWifi ? 5 : 0) +
    (options.lossDamageWaiver ? 20 : 0);

    const getTotal = () => {
        let total = selectedCar ? selectedCar.priceToRent : 0;

        if (options.babySeat) {
            total += 0; // Baby seat is free
        }
        if (options.mobileWifi) {
            total += 5;
        }
        if (options.lossDamageWaiver) {
            total += 20;
        }

        // Add tax (let's say it's 10%)
        total = total + total * 0.1;

        return total.toFixed(2); // Round to 2 decimal places
    };


    
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
            //step1=====================================================
            title: { english: "Select a Car", french: "Choisir une voiture" },
            content: { 
                english:    
                <div className = "CarContainer">
                    <h2>Filter by price:</h2>
                    <div className="price-inputs">
                        <p>Min price: <input type="number" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} /></p>
                        <p>Max price: <input type="number" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} /></p>
                        <p>Min seats:<input type="number" value={minSeats} onChange={e => setMinSeats(Number(e.target.value))} /></p>

                    </div>

                    {cars.filter(car => car.priceToRent >= minPrice && car.priceToRent <= maxPrice && car.seats >= minSeats).map((car, index) =>  (
                    <div key={index} className="car-details">
                        <img src={car.imageUrl} alt={car.name} className="car-image" />
                        <div className="car-info">
                            <h2>{car.name}</h2>
                            <p>Brand: {car.brand}</p>
                            <p>Price to Rent: ${car.priceToRent}</p>
                            {detailsCarId === car.id && (
                                <div className="car-more-details">
                                    <p>Seats: {car.seats}</p>
                                    <p>Doors: {car.doors}</p>
                                    <p>MPG: {car.mpg}</p>
                                    <p>Smoke Free: {car.smokeFree ? 'Yes' : 'No'}</p>
                                    <p>Transmission: {car.transmission}</p>
                                </div>
                            )}
                            <button 
                                className="more-details-button"
                                onClick={() => detailsCarId === car.id ? setDetailsCarId(null) : setDetailsCarId(car.id)}>
                                {detailsCarId === car.id ? 'Hide Details' : 'More Details'}
                            </button>
                            <button 
                                    onClick={() => {
                                        setSelectedCarId(car.id);
                                        setSelectedCar(car);
                                    }}
                                    className={selectedCarId === car.id ? 'selected' : 'default'}
                                >
                                    Select
                            </button>
                        </div>
                    </div>
                ))}
                </div>,
            french: 
                <div className = "CarContainer">
                    <h2>Filtrer par prix:</h2>
                    <div className="price-inputs">
                        <p>Prix minimum: <input type="number" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} /></p>
                        <p>Prix maximum: <input type="number" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} /></p>
                        <p>Sièges minimum: <input type="number" value={minSeats} onChange={e => setMinSeats(Number(e.target.value))} /></p>
                    </div>
                    {cars.filter(car => car.priceToRent >= minPrice && car.priceToRent <= maxPrice).map((car, index) =>  (
                    <div key={index} className="car-details">
                        <img src={car.imageUrl} alt={car.name} className="car-image" />
                        <div className="car-info">
                            <h2>{car.name}</h2>
                            <p>Marque: {car.brand}</p>
                            <p>Prix de location: {car.priceToRent}€</p>
                            {detailsCarId === car.id && (
                                <div className="car-more-details">
                                    <p>Sièges: {car.seats}</p>
                                    <p>Portes: {car.doors}</p>
                                    <p>Kilométrage: {car.mpg}</p>
                                    <p>Non-fumeur: {car.smokeFree ? 'Oui' : 'Non'}</p>
                                    <p>Transmission: {car.transmission === 'automatic' ? 'Automatique' : 'Manuelle'}</p>
                                </div>
                            )}
                            <button 
                                className="more-details-button"
                                onClick={() => detailsCarId === car.id ? setDetailsCarId(null) : setDetailsCarId(car.id)}>
                                {detailsCarId === car.id ? 'Masquer les détails' : 'Plus de détails'}
                            </button>
                            <button 
                                    onClick={() => {
                                        setSelectedCarId(car.id);
                                        setSelectedCar(car);
                                    }}
                                    className={selectedCarId === car.id ? 'selected' : 'default'}
                                >
                                    Sélectionner
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            }
        },
        // step2=====================================================
        {
            title: { english: "Rental Options", french: "Options de location" },
            content: { 
            english: 
                <div>
                <h2>Options:</h2>
                <label>
                    <input 
                    type="checkbox" 
                    name="babySeat" 
                    checked={options.babySeat} 
                    onChange={e => setOptions({...options, babySeat: e.target.checked})} 
                    />
                    Baby Seat - Free
                </label><br/>
                <label>
                    <input 
                    type="checkbox" 
                    name="mobileWifi" 
                    checked={options.mobileWifi} 
                    onChange={e => setOptions({...options, mobileWifi: e.target.checked})} 
                    />
                    Mobile WiFi - $5/day
                </label><br/>
                <label>
                    <input 
                    type="checkbox" 
                    name="lossDamageWaiver" 
                    checked={options.lossDamageWaiver} 
                    onChange={e => setOptions({...options, lossDamageWaiver: e.target.checked})} 
                    />
                    Loss Damage Waiver - $20/day
                </label>
                </div>,
            french: 
                <div>
                <h2>Options:</h2>
                <label>
                    <input 
                    type="checkbox" 
                    name="babySeat" 
                    checked={options.babySeat} 
                    onChange={e => setOptions({...options, babySeat: e.target.checked})} 
                    />
                    Siège bébé - Gratuit
                </label><br/>
                <label>
                    <input 
                    type="checkbox" 
                    name="mobileWifi" 
                    checked={options.mobileWifi} 
                    onChange={e => setOptions({...options, mobileWifi: e.target.checked})} 
                    />
                    WiFi mobile - $5/jour
                </label><br/>
                <label>
                    <input 
                    type="checkbox" 
                    name="lossDamageWaiver" 
                    checked={options.lossDamageWaiver} 
                    onChange={e => setOptions({...options, lossDamageWaiver: e.target.checked})} 
                    />
                    Renonciation à la perte de dommages - $20/jour
                </label>
                </div>  
            }  
        },
        {
          title: { english: "Payment Information", french: "Informations sur le paiement" },
          content: { 
            // Step 3=====================================================
            english: <div>
                <h2>Your Information</h2>
                <label for="firstname" style={{ display: "inline-block", width: "200px" }}>First Name:</label>
                <input type="text" id="firstname" name="firstname" /><br />
                <label for="lastname" style={{ display: "inline-block", width: "200px" }}>Last Name:</label>
                <input type="text" id="lastname" name="lastname" /><br />
                <label for="email" style={{ display: "inline-block", width: "200px" }}>Email:</label>
                <input type="email" id="email" name="email" /><br />
                <label for="phone" style={{ display: "inline-block", width: "200px" }}>Phone Number:</label>
                <input type="tel" id="phone" name="phone" />
                <p> </p>
                <hr></hr>

                <h2>Billing Information</h2>
                <label for="cardnumber" style={{ display: "inline-block", width: "200px" }}>Card Number:</label>
                <input type="text" id="cardnumber" name="cardnumber" /><br />
                <label for="expirydate" style={{ display: "inline-block", width: "200px" }}>Expiration Date:</label>
                <input type="text" id="expirydate" name="expirydate" />
            </div>, 
            french: <div>
                <h2>Vos informations</h2>
                <label for="firstname" style={{ display: "inline-block", width: "200px" }}>Prénom :</label>
                <input type="text" id="firstname" name="firstname" /><br />
                <label for="lastname" style={{ display: "inline-block", width: "200px" }}>Nom de famille :</label>
                <input type="text" id="lastname" name="lastname" /><br />
                <label for="email" style={{ display: "inline-block", width: "200px" }}>Email :</label>
                <input type="email" id="email" name="email" /><br />
                <label for="phone" style={{ display: "inline-block", width: "200px" }}>Numéro de téléphone :</label>
                <input type="tel" id="phone" name="phone" />

                <h2>détails de facturation</h2>
                <label for="cardnumber" style={{ display: "inline-block", width: "200px" }}>numéro de carte</label>
                <input type="text" id="cardnumber" name="cardnumber" /><br />
                <label for="expirydate" style={{ display: "inline-block", width: "200px" }}>Date d'expiration</label>
                <input type="text" id="expirydate" name="expirydate" />
            </div> 
          }
        },
        {
            //step4============================================================
            title: { english: "Confirm Rental", french: "Confirmer la location" },
            content: { 
              english: 
                <div>
                  <h2>Confirmation:</h2>
                  <p>Car: {selectedCar ? selectedCar.name : 'No car selected'}</p>
                  <p>Baby Seat: {options.babySeat ? 'Yes' : 'No'}</p>
                  <p>Mobile WiFi: {options.mobileWifi ? 'Yes' : 'No'}</p>
                  <p>Loss Damage Waiver: {options.lossDamageWaiver ? 'Yes' : 'No'}</p>
                  <hr></hr>
                  <p>Total: ${getTotal()}</p>
                </div>,
              french: 
                <div>
                  <h2>Confirmation:</h2>
                  <p>Voiture: {selectedCar ? selectedCar.name : 'Aucune voiture sélectionnée'}</p>
                  <p>Siège bébé: {options.babySeat ? 'Oui' : 'Non'}</p>
                  <p>WiFi mobile: {options.mobileWifi ? 'Oui' : 'Non'}</p>
                  <p>Renonciation à la perte de dommages: {options.lossDamageWaiver ? 'Oui' : 'Non'}</p>
                  <hr></hr>
                  <p>Total: ${getTotal()}</p>
                </div>
            }
        }
      ];

      const [language, setLanguage] = useState("english");


    const handleNext = () => {
        if (currentStep === 0 && selectedCarId === null) {
            alert('Please select a car before proceeding to the next step.');
            return;
        }

        if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        alert("Submitted!");
        // Add your submit logic here
    };

    return(
        <div>
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

            <div class = "languageSwitch">
                <button onClick={() => setLanguage(language === "english" ? "french" : "english")}>
                Français/English
                </button>
            </div>


            <div className="progress-bar">
                {steps.map((step, index) => (
                <div className="step" key={index}>
                    <div className={`circle ${currentStep >= index ? "active" : ""}`}>
                    {index + 1}
                    </div>
                    {index < steps.length - 1 && <div className={`line ${currentStep > index ? "active" : ""}`} />}
                </div>
                ))}
            </div>
            <div className="step-container">
                <h1 className="step-title">{steps[currentStep].title[language]}</h1>


                <div className="step-content">
                    {steps[currentStep].content[language]}
                </div>

                <div className="button-container">
                    <div>
                        {currentStep > 0 && (
                        <button onClick={handlePrev} className="left-button">Previous</button>
                        )}
                    </div>
                    <div>
                        {currentStep < steps.length - 1 ? (
                        <button onClick={handleNext} className="right-button">Next</button>
                        ) : (
                        <button onClick={handleSubmit} className="right-button">Submit</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Booking;
