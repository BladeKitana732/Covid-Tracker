import React, { Component } from 'react';
// import axios from 'axios';

// const api = "https://api.covid19api.com/summary"

export default class LandingPage extends Component {
  
  
    constructor(props) {
        super(props);


          this.state = {

              name: "",
              birthday: "",
              email: "",
              countryName: [],

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
      //the event is the change that will be passed through
      console.log(event.target.value);
      //this makes a "change" in input box updating as each change is now being registered
      this.setState({
        name: event.target.value
      })


    }


    handleBirth = (event) => {
      event.preventDefault();
      //the event is the change that will be passed through
      console.log(event.target.value);
     
      this.setState({
        birthday: event.target.value
      })

    }


    handleEmail = (event) => {
      event.preventDefault();
      //the event is the change that will be passed through
      console.log(event.target.value);
     
      this.setState({
        email: event.target.value
      })

    }


    componentDidMount() {
      
      fetch("https://api.covid19api.com/summary")

      .then(result => {
        return result.json()})
    
      //may have to use array.concat method? will need .map 

      .then(countryName => this.setState({
        countryName: countryName
      }))
         
      // axios.get(api)

      // .then((result) => {
      //     let countryDisplay = result.data.Countries;

      //     console.log('Country info displayed: ', countryDisplay)

      //     //how to set to if selection in drop list === this setState country then to render modal and submission of form
      //     this.setState({
      //         country: countryDisplay
      //     })
      // })
    

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
                    <input onChange= {this.handleBirth} type="text" birthday="birthday" value={this.state.birthday} />
                  </label>

                  <label>
                    Email:
                    <input onChange= {this.handleEmail} type="text" email="email" value={this.state.email}/>
                  </label>

                  {/* Drop down list of countries to select from here-- Completed*/}
                  <p>Select Home Country:
                  {/* <select>
                    { this.state.countryName.map(country => <option value="country.value">{country.countryName}</option>)}
                  </select> */}
                  </p>


                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
  


}