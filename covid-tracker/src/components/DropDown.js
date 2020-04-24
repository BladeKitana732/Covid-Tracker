import React, { Component } from 'react';
import axios from 'axios';

export default class DropDown extends Component {
    constructor(props){
        super(props)

        this.state = {
            country: []
        }
    }


    componentDidMount() {
        const currentInfo = "https://api.covid19api.com/summary";
        
        axios.get(currentInfo)
  
        .then((response) => {
            let data = response.data.Countries;
  
            console.log(data)
  
            //how to set to if selection in drop list === this setState country then to render modal and submission of form
            this.setState({
                country: data,

            })
        })
      
  
      }


    render() {

        const countryName= this.state.country.map((country, index) => {
            return (
                <div key= {index}>{country}}</div>
            )
        })

        console.log(countryName);

        return (
         <select>
            {/* <option value="option1">1</option>
            <option value="option2">2</option>
            <option selected value="option3">3</option>
            <option value="option4">4</option> */}
          </select>
        )
    }
}

