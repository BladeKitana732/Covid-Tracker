import React from "react";

function PropTest(props) {
    console.log(props.infoDisplay.map(country => console.log(country)))
    return(
        <select>

             <option> </option>
            
        </select>
    )
}

export default PropTest;