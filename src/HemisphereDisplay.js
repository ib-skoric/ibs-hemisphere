import react from 'react'

const HemisphereDisplay = ( { latitude } ) => {

    const hemisphere = latitude > 0 ? "You're in norther hemisphere" : "You're in the southern hemisphere";

    return(
        <div>{ hemisphere }</div>
    )
}

export default HemisphereDisplay;