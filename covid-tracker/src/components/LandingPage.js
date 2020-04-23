import React, { Component } from 'react';
import axios from 'axios';

const api = "https://api.covid19api.com/summary"

export default class LandingPage extends Component {
  
    



    constructor(props) {
        super(props);


          this.state = {

              name: "",
              birthday: "",
              email: "",
              country: "",
              modalStatus: false //added for when user clicks submit it will turn to true

          }
        
       
        
        //  axios.get(api)

        //  .then((result) => {
        //      const countryDisplay = result.data.Countries;
 
        //      console.log('Country info displayed: ', countryDisplay)
 
        //      //how to set to if selection in drop list === this setState country then to render modal and submission of form
        //      this.setState({
        //          country: countryDisplay
        //      })
        //  })
 
         
         //need to link this get request to drop down menu submission to render user to information page based on home country they selected in form. 
        

    }


    handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form has been handled!');

    }

    handleName = (event) => {
      event.preventDefault();
      console.log('State name has been updated')
    }


    componentDidMount() {
 
         
      axios.get(api)

      .then((result) => {
          const countryDisplay = result.data.Countries;

          console.log('Country info displayed: ', countryDisplay)

          //how to set to if selection in drop list === this setState country then to render modal and submission of form
          this.setState({
              country: countryDisplay
          })
      })
    




    }
    

    render() {
        return (
            <div>
                <h1>Homepage: This page will display form and image of rona</h1>

                <form onSubmit= {this.handleSubmit}>
                  <label>
                    Name:
                    <input onChange= {this.handleName} type="text" name="name" value={this.state.name}/>
                  </label>

                  <label>
                    Birthday:
                    <input type="text" birthday="birthday" value={this.state.birthday} />
                  </label>

                  <label>
                    Email:
                    <input type="text" email="email" value={this.state.email}/>
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


                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
  


}