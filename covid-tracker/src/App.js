import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import InfoPage from './components/InfoPage';
import DropDown from './components/DropDown';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/Homepage" component= {LandingPage}/>
        <Route exact path="/Covid-Tracker" component= {InfoPage}/>
        <Route exact path="/thirdRoute" component= {DropDown}/>
      </Router>
    </div>
  )
}


