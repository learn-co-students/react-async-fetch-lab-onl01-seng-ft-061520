// create your App component here
import React from 'react'

class App extends React.Component{

    constructor(){
        super()
        this.state = {

        }
    }
componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json)
        .then(data => console.log(data))
}
    render(){
        return <h1>Hi</h1>
    }
}

export default App