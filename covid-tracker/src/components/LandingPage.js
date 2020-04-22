import React, { Component } from 'react';
import axios from 'axios';



export default class LandingPage extends Component {

    state = {
        country: ""
    }

    componentDidMount() {
        const api = "https://api.covid19api.com/summary";

        //need to link this get request to drop down menu submission to render user to information page based on home country they selected in form. 
        axios.get(api)
    
    .then((result) => {
        const initialSubmit = result.data.Countries[235];

        console.log('Country default is', initialSubmit)

        this.setState({
            country: initialSubmit
        })
        
    })
    
    .catch((err) => {

        console.log('Error has been computed', err)

    });














    }
    

    render() {
        return (
            <div>
                <h1>Homepage: This page will display form and image of rona</h1>

                <form>
                  <label>
                    Name:
                    <input type="text" name="name" />
                  </label>

                  <label>
                    Birthday:
                    <input type="text" birthday="birthday" />
                  </label>

                  <label>
                    Email:
                    <input type="text" email="email" />
                  </label>

                  {/* Drop down list of countries to select from here */}


                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
