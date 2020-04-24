import React from 'react';

export default function InfoPage() {
    return (
        <div>
            <h1>Welcome to my tracker!</h1>
            <h3><strong>How to use tracker:</strong></h3>
            <ul>
                <li>There will be a drop down list with names of Countries</li>
                <li>Country selection will display the following information for selected Country: </li>
                <ol>
                    <li>New confirmed cases:</li>
                    <li>Total confirmed cases:</li>
                    <li>New death cases:</li>
                    <li>Total death count:</li>
                    <li>Newly recovered today:</li>
                    <li>Total recovered count:</li>
                </ol>
            </ul>
        </div>
    )
}


