import React from 'react';
import northernPic from './images/NorthernHemisphere.jpg';
import southernPic from './images/SouthernHemisphere.jpg';

// object with northern and southern object and their values - text to display and picture variable
const hemisphereConfig = {
    Northern: {
        text: "It is northern hemisphere",
        picture: northernPic
    },
    Southern: {
        text: "It is southern hemisphere",
        picture: southernPic
    }
}

// get latitude from parent props
const HemisphereDisplay = ( { latitude } ) => {

    // if latitute > 0 return Northern if not then return Southern
    const hemisphere = latitude > 0 ? "Northern" : "Southern";
    // use ES6 destructuring to get the text and picture from the hemisphereconfig and appropriate
    // object based on the location
    // this returns const text = hemisphereconfig[hemisphere].text
    // and const picture = hemisphereconfig[hemisphere].picture
    const { text, picture } = hemisphereConfig[hemisphere];

    return(
        <div>
            <img src={picture} alt="Hemisphere picture" />
            { text }
        </div>
    )
}

export default HemisphereDisplay;