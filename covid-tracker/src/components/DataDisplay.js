import React, { Component } from 'react';
// import DropDown from './DropDown';

import axios from 'axios';

import PropTest from './PropTest';



//resource found: https://www.youtube.com/watch?v=12l6lkW6JhE&t=564s - regarding the axios.create()
//resource found: https://www.codota.com/code/javascript/functions/axios/create

//creating a api variable as base to be able to pull information from the separate objects in unison




export default class DataDisplay extends Component {



    constructor(props) {
        super(props);


            this.state = {
                
                fullData: []

      
            }
    }



    componentDidMount() {

    const  fullData = "https://api.covid19api.com/summary";

    axios.get(fullData)

    .then((response) => {
        const confirmed = response.data;

        console.log(confirmed)
    })



    }

    render() {
        return (
            <div>
                <h1>Sanity Check</h1>
                {/* <PropTest dataDisplay = { this.state.fullData }/> */}
            </div>
        )
    }
}


