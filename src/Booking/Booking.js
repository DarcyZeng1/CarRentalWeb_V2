import React from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Import your logo image
import { useState } from 'react';


const Booking = () =>  {

    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
          title: { english: "Select a Car", french: "Choisir une voiture" },
          content: { 
            english: <div>This is the content for Step 1 in English</div>, 
            french: <div>Voici le contenu de l'étape 1 en français</div> 
          }
        },
        {
          title: { english: "Rental Options", french: "Options de location" },
          content: { 
            english: <div>This is the content for Step 2 in English</div>, 
            french: <div>Voici le contenu de l'étape 2 en français</div> 
          }
        },
        {
          title: { english: "Payment Information", french: "Informations sur le paiement" },
          content: { 
            // Step 3
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
          title: { english: "Check Your Order", french: "Vérifier votre commande" },
          content: { 
            english: <div>This is the content for Step 4 in English</div>, 
            french: <div>Voici le contenu de l'étape 4 en français</div> 
          }
        }
      ];

      const [language, setLanguage] = useState("english");


    const handleNext = () => {
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
                    <li className = "navElem"><Link to= "/ListOfCars">List of Cars</Link></li>
                    <li className = "navElem"><Link to= "/Home">Location</Link></li>
                    <li className = "navElem"><Link to= "/Contact">Contact</Link></li>
                </ul>
                </div>
            </nav>


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

                <div>
                    <button onClick={() => setLanguage(language === "english" ? "french" : "english")}>
                    Switch to French/English
                    </button>
                </div>
            </div>
        </div>
    )

}


export default Booking;




























// export function Booking(){

//     const [sortingOrder, setSortingOrder] = useState('asc');
//     const [carList, setCarList] = useState([
//         { id: 1, price: 100 },
//         { id: 2, price: 150 },
//         { id: 3, price: 120 },
//         // Add more cars here
//     ]);

//     const sortCarsByPrice = () => {
//         const sortedCars = [...carList].sort((a, b) => {
//             if (sortingOrder === 'asc') {
//                 return a.price - b.price;
//             } else {
//                 return b.price - a.price;
//             }
//         });
//         setCarList([...sortedCars]);
//         setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc');
//     };

//     // setup the step content
//     const step1Content = (
//         <h1>Step 1 Content</h1>
//     );

//     const step2Content = (
//         <div>
//             <h1>Step 2 Content</h1>
//             <div className="car-list">
//                 <h2>List of Cars</h2>
//                 <ul>
//                 {carList.map((car) => (
//                     <li key={car.id}>
//                     <span>Car ID: {car.id}</span>
//                     <span>Price: ${car.price}/day</span>
//                     </li>
//                 ))}
//                 </ul>
//             </div>
//             <button onClick={sortCarsByPrice}>Sort by Price</button>
//         </div>
//     );

//     const step3Content = (
//         <h1>Step 3 Content</h1>
//     );
    
//     const step4Content = (
//         <h1>Step 4 Content</h1>
//     );
    
//     // setup step validators, will be called before proceeding to the next step
//     function step2Validator() {
//         // return a boolean
//         return true;
//     }
    
//     function step3Validator() {
//         // return a boolean
//         return true;
//     }

//     function step4Validator() {
//         // return a boolean
//         return true;
//     }
    
//     function onFormSubmit() {
//         // handle the submit logic here
//         // This function will be executed at the last step
//         // when the submit button (next button in the previous steps) is pressed
//     }

//     return(
//         <div>
//             <nav className="navbar">
//                 <div className="left">
//                 <img src={logo} alt="Logo" className="logo" />
//                 <h1 className="company-name">Car Rental</h1>
//                 </div>
//                 <div className="right">
//                 <ul>
//                     <li><Link to= "/Home">Home</Link></li>
//                     <li><Link to= "/ListOfCars">List of Cars</Link></li>
//                     <li><a href="#">Locations</a></li>
//                     <li><a href="#">Contact</a></li>
//                 </ul>
//                 </div>
//             </nav>

//             {/* <StepProgressBar
//             startingStep={1}
//             onSubmit={onFormSubmit}
//             steps={[
//                 {
//                     label: 'Step 1',
//                     subtitle: 'Pick up location and time',
//                     name: 'step 1',
//                     content: step1Content
//                 },
//                 {
//                     label: 'Step 2',
//                     subtitle: 'Select a Car',
//                     name: 'step 2',
//                     content: step2Content,
//                     validator: step2Validator
//                 },
//                 {
//                     label: 'Step 3',
//                     subtitle: 'Rental Options',
//                     name: 'step 3',
//                     content: step3Content,
//                     validator: step3Validator
//                 },
//                 {
//                     label: 'Step 4',
//                     subtitle: 'Your Information',
//                     name: 'step 4',
//                     content: step4Content,
//                     validator: step4Validator
//                 },
//             ]}
//             />; */}
//         </div>
//     )
// }
