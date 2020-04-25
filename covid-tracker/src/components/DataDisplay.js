import React, { Component } from 'react';
import DropDown from './DropDown';
import DomDisplay from './DomDisplay';
import axios from 'axios';




export default class DataDisplay extends Component {



    constructor(props) {
        super(props);


            this.state = {
                
                confirmed: [
                    {
                        TotalConfirmed: "",
                        TotalDeaths: "",
                        TotalRecovered: ""
                    }
                ]
      
            }
    }



    componentDidMount() {

    const  fullData = "https://api.covid19api.com/summary";

    axios.get(fullData)

    .then((response) => {
        const confirmed = response.data.Countries;

        console.log(confirmed)    })



    }

    render() {
        return (
            <div>
            {/* Need an if/else statement that will check for if drop down list option selected = country name, then render that countries info only */}
                <h1>Sanity Check</h1>
               <DropDown />
               <DomDisplay totals= {this.state.confirmed } />
            </div>
        )
    }
}


