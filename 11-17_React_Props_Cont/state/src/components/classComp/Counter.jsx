
import React, { Component } from 'react'

export default class Counter extends Component {
    
    constructor(props) {
        super(props)

        // list of key-value pairs to be kept in state
        this.state = {
            count: this.props.initialCount
        }
    }

    increment = () => {
        // by adding extra () in the callback function, we can implicitly return code with multiple lines
        this.setState((state, props) => ( 
            {count: state.count + props.stepSize} 
        ))
    }

    reset = () => {
        this.setState({count: 0})
    }

    decrement = () => {
        this.setState((state,props) => {
            return {count: state.count - props.stepSize} // can use return statement without the extra ()
        })
    }
    

    render() {
        const {count} = this.state;
        return (
            <>
                <h1>{count}</h1>
                <button style={{margin: "10px"}} onClick={this.increment}>Increment +</button><br />
                <button style={{margin: "10px"}} onClick={this.reset}>Reset to 0</button><br />
                <button style={{margin: "10px"}} onClick={this.decrement}>Decrement -</button><br /> 
            </>
        )
    }
}
