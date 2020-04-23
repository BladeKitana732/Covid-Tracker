import React, { Component } from 'react';
import axios from 'axios';


export default class LandingPage extends Component {
    
   state = {

        country: ""

    }

    constructor(props) {
        super(props);
        
        const api = "https://api.covid19api.com/summary"
        
         axios.get(api)

         .then((result) => {
             const countryDisplay = result.data.Countries;
 
             console.log('Country info displayed: ', countryDisplay)
 
             //how to set to if selection in drop list === this setState country then to render modal and submission of form
            //  this.setState({
            //      country: countryDisplay
            //  })
         })
 
         
         //need to link this get request to drop down menu submission to render user to information page based on home country they selected in form. 
        

    }





    componentDidMount() {

    




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

                  {/* Drop down list of countries to select from here-- Completed*/}
                  <p>Select Home Country:
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  </p>


                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
  


}