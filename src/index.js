import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {

    state = { latitude: null, errorMessage: "" }

    // will get executed only once when component is mounted
    componentDidMount() {
        // call geo location api of the browser
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            (error) => this.setState({ errorMessage : error.message }));
    }

    // will get executed as many times as the component is updated
    componentDidUpdate() {
        console.log("Component updated");
    }

    // must define this to render out content
    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div> {this.state.errorMessage }</div>;
        }

        if (!this.state.errorMessage && this.state.latitude) {
            // pass the state->latitude prop of this component to the hemisphere display
            return <div> <HemisphereDisplay latitude = {this.state.latitude} /> </div>;
        }

        else {
            return <div> Loading... </div>;
        }

    }
}

// render the app
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
