import React, { Component } from 'react';
import DropDown from './DropDown';

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

                  <label>Select Home Country: </label>
                  <DropDown />

                  <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
  


}