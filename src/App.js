import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import ListOfCars from './ListOfCars/ListOfCars';
import Booking from './Booking/Booking';
import Contact from './Contact/Contact';



function App() {
  return (
    <Router basename="/Car_Rental-V2">
      <div className="App">
      <header className="App-header">
        {/* Define routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ListOfCars" element={<ListOfCars />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </header>
    </div>
  </Router>
  );
}

export default App;
