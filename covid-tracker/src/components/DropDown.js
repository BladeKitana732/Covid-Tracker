import React, { Component } from 'react';
import axios from 'axios';

export default class DropDown extends Component {
    constructor(props){
        super(props)

        this.state = {
            country: "",
            newConfirmed: "",
            totalConfirmed: "",
            newDeaths: "",
            totalDeaths: "",
            newRecovered: "",
            totalRecovered: ""
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
                country: data
            })
        })
      
  
      }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

