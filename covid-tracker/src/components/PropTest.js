import React from "react";

function PropTest(props) {
    console.log(props.infoDisplay.map(country => console.log(country.Country)))
    return(
        <select>


            {
                props.infoDisplay.map(country => <option>{country.Country}
                </option>)

            }
            
        </select>
    
    )
}

export default PropTest;