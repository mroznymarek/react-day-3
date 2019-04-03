import React from 'react'

class TypeName extends React.Component {
    state = {
        name: "Ala"
    }

nameChangeHandler = (event) => this.setState ({
    name: event.target.value,
})

    render() {  
        return (
            <div>
                <h1>{this.state.name}</h1>

            <input
                value={this.state.name}
                onChange = {this.nameChangeHandler}
            />    
            </div>
        )
    }
}

export default TypeName