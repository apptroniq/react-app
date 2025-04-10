import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 bg-primary text-light py-3'>
            <Navbar title="Apptroniq" />
          </div>
        </div>
      </div>

      {/* <div className='container'>
        hello 
      </div> */}

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/about/company" element={<AboutCompany />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
