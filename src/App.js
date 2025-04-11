import React, { Suspense, lazy } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const AboutCompany = lazy(() => import('./pages/AboutCompany'));

function App() {
  return (
    <>
    <ErrorBoundary>
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

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/about/company" element={<AboutCompany />}></Route>
            </Routes>
          </Suspense>
      </Router>
    </ErrorBoundary>
    </>
  );
}

export default App;
