import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

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
           return <SeasonDisplay lat={this.state.lat}/>
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
