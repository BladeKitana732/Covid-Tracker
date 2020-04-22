import React, { Component } from 'react'


export default class LandingPage extends Component {
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
