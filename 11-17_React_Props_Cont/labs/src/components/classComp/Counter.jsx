
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    incrementBy10 = () => {
        this.setState(
            {count: this.state.count + 10 }
        )
    }

    incrementBy1 = () => {
        this.setState(
            {count: this.state.count + 1 }
        )
    }
    
    decrementBy1 = () => {
        this.setState(
            {count: this.state.count - 1 }
        )
    }

    decrementBy10 = () => {
        this.setState(
            {count: this.state.count - 10 }
        )
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementBy10}>+ 10</button>
                <button onClick={this.incrementBy1}>+ 1</button>
                <button onClick={this.decrementBy1}>- 1</button>
                <button onClick={this.decrementBy10}>- 10</button>
            </>
        )
    }
}
