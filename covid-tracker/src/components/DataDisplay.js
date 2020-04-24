import React, { Component } from 'react';
// import DropDown from './DropDown';

import axois from 'axios';

import PropTest from './PropTest';


//resource found: https://www.youtube.com/watch?v=12l6lkW6JhE&t=564s - regarding the axios.create()
//resource found: https://www.codota.com/code/javascript/functions/axios/create

//creating a api variable as base to be able to pull information from the separate objects in unison

const totalInfo = axios.create({
    baseURL: ""
})


export default class DataDisplay extends Component {

    state = {
        
        key1: []

    }

    // componentDidMount() {

    //     axios.get(wineLink)
    
    //     .then((result) => {
    //         const wines = result.data;

    //         console.log(wines);
    
    //         this.setState({
    //             wine: result.data
    //         });
            
    //     })

    //     .catch((err) => {

    //         console.log('Error has been computed', err)
    
    //     });


    // }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

