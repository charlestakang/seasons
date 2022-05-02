import React from 'react'
// import { SeasonDisplay } from './components/SeasonDisplay'

class App extends React.Component{

    state = {
        lat: null,
        error: '' }

    componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                var crd = position.coords
                this.setState({lat: crd.latitude})
            },
            (err) =>{
                this.setState({error: err.message})
            })

    }

    render(){
        console.log(this.state.lat)

        return (
            // this.state.lat? this.state.lat : this.state.error
        
        <h1>{this.state.lat? this.state.lat : this.state.error}</h1>
        )
    }
}

export default App