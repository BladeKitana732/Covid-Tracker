import React, { Component } from 'react';
// import DropDown from './DropDown';

import axois from 'axios';

import PropTest from './PropTest';


//resource found: https://www.youtube.com/watch?v=12l6lkW6JhE&t=564s - regarding the axios.create()
//resource found: https://www.codota.com/code/javascript/functions/axios/create

//creating a api variable as base to be able to pull information from the separate objects in unison

let wineLink = axios.create({
    baseURL: "http://myapi-profstream.herokuapp.com/api/2f49a6/wines"
})


export default class DataDisplay extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

