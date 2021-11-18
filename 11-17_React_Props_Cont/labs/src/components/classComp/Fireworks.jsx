
import React, { Component } from 'react'

export default class Fireworks extends Component {
    
    constructor() {
        super()

        this.state = {
            boom: "🧨"
        }

    }

    boom = () => {
        if(this.state.boom === "🧨"){
            this.setState({
                boom: "💥"
            })
        }
        else if(this.state.boom === "💥"){
            this.setState({
                boom: "🧨"
            })
        }

    }

    render() {
        return (
            <>
                <h1>{this.state.boom}</h1>
                <button onClick={this.boom}>Boom</button>
            </>
        )
    }
}
