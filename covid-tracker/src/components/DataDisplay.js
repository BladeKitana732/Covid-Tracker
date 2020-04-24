import React from 'react';
import DropDown from './DropDown';



export default function DataDisplay() {
    return (
        <div>
               <DropDown />  
               <ul style={{textDecoration: "none"}}>
                    <li>New confirmed cases:</li>
                    <li>Total confirmed cases:</li>
                    <li>New death cases:</li>
                    <li>Total death count:</li>
                    <li>Newly recovered today:</li>
                    <li>Total recovered count:</li>
                </ul>
        </div>
    )
}
