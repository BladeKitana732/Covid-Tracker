import React, { Component } from 'react';
import axios from 'axios';

export default class DropDown extends Component {
    constructor(props){
        super(props)

        this.state = {
            country: ""
        }
    }


    componentDidMount() {
        const currentInfo = "https://api.covid19api.com/summary";
        
        axios.get(currentInfo)
  
        .then((response) => {
            let data = response.data.Countries.map();
  
            console.log(data)
  
            //how to set to if selection in drop list === this setState country then to render modal and submission of form
            this.setState({
                country: this.state.country,

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

