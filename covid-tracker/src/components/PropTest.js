import React from "react";

function PropTest(props) {
    console.log(props.infoDisplay.map(country => console.log(country.Country)))
    return(
        <div>
            {
                props.infoDisplay.map(country => country.Country)

            }
        </div>
    
    )
}

export default PropTest;