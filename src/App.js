import React, {Component} from 'react'

class App extends Component {
    
    state = {
        peopleInSpace: []
    }
    
    
    
    render() {
        return (
         <ol>
             <li>{this.state.peopleInSpace.map(person => person.name)}</li>
         </ol>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState.state({
                peopleInSpace: data.people
            })
        })
    }
}
