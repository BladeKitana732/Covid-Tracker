import React, { Component } from 'react';
import axios from 'axios';

export default class LandingPage extends Component {
  
  
    constructor(props) {
        super(props);


          this.state = {

              name: "",
              birthday: "",
              email: "",
            
          };
        
        

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
  
      // const dropDownListOptions = this.state.country.map((name) => {
      //   return (
      //     <div>
      //     <p>Select Home Country:
      //     <select>
      //      <option></option>
      //     </select>
      //     </p>
      //     </div>

      //   )
      // })



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
                  
                  {/* <p>Select Home Country:
                  <select>
                   
                  </select>
                  </p>


                    <input type="submit" value="submit" /> */}
                </form>
            </div>
        )
    }
  


}