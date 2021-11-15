
// using a class component
// import React, { Component } from 'react'

// export class Friend extends Component {
//     render() {
//         return (
//             <div>
//             <h2>{this.props.firstName} {this.props.lastName} is my friend.</h2>
//         </div>
//         )
//     }
// }

// export default Friend


// using a function component
import React from 'react'

function Friend({firstName, lastName, age}) {
    return (
        <div>
            <h2>{firstName} {lastName} is my friend. Age: {age}</h2>
        </div>
    )
}

export default Friend
