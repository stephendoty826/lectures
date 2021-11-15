
import React, { Component } from 'react'
import SearchBar from './SearchBar'

export class Body extends Component {
    // this.props.info
    render() {
        let city = "Houston"
        let arr = [1, 2, 3, 4, 5]
        // const {info} = this.props
        return (
            <div>
                <h1>{this.props.info}</h1>
                <h3>{city}</h3>
                <h3>{4 + 5}</h3>
                {arr.map(num=><h5>{num}</h5>)}
                <SearchBar/>
                <h1>This is the body</h1>
            </div>
        )
    }
}

export default Body

