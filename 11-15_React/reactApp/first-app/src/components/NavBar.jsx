
import React, { Component } from 'react'

class NavBar extends Component {
    
    render() {
        return (
            <>
                <div className="navBar">
                    <ul className="ulTag">
                        <li>{this.props.link1}</li>
                        <li>{this.props.link2}</li>
                        <li>{this.props.link3}</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default NavBar
