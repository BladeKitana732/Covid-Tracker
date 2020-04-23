import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
       <LandingPage />
      </div>
    )
  }
}

