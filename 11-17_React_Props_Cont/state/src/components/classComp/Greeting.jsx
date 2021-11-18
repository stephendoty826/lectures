
import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Greeting extends Component {
    render() {
        return (
            <>
                <h1>Hello, {this.props.name}</h1>
            </>
        )
    }
}

Greeting.propTypes = {
    name: PropTypes.string
}

Greeting.defaultProps = {
    name: "Stranger"
}

