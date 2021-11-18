
import React, { Component } from 'react'

export default class StatusPicker extends Component {
    
    constructor(){
        super()

        this.state = {
            status: "Active"
        }
    }

    setStatusActive = () => {
        this.setState(
            {status: "Active"}
        )
    }

    setStatusAway = () => {
        this.setState(
            {status: "Away"}
        )
    }

    setStatusOffline = () => {
        this.setState(
            {status: "Offline"}
        )
    }
    
    render() {
        return (
            <>
                <h1>{"Status: " + this.state.status}</h1>
                <button onClick={this.setStatusActive}>Active</button>
                <button onClick={this.setStatusAway}>Away</button>
                <button onClick={this.setStatusOffline}>Offline</button>

            </>
        )
    }
}
