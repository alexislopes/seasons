import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        //THIS IS ONLY TIME we do redirect assignment
        // to rhis.state
        this.state = { lat: null, errorMessage: '' }        
    }

    componentDidUpdate() {
        console.log('my component was just updated')
    }

    // React says we have to define render!!
    render () {
        console.log('rendering')
       if (this.state.errorMessage && !this.state.lat){
           return <div>Error: {this.state.errorMessage}</div>
       }

       if (!this.state.errorMessage && this.state.lat) {
           return <div>Latitude: {this.state.lat}</div>
       }

       return <div>Loading!</div>
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message })
            
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
