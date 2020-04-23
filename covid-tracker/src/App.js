import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import InfoPage from './components/InfoPage';
import DropDown from './components/DropDown';


export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/Homepage" component= {LandingPage}/>
        <Route path="/Covid-Tracker" component= {InfoPage}/>
        <Route path="/thirdRoute" component= {DropDown}/>
      </Router>
    </div>
  )
}


