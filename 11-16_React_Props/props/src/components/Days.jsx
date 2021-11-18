
import React, { Component } from 'react'

export default class Days extends Component {
    render() {
        let days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];
        
        // let daysArr = days.map(day => <li key={day}>{day}</li>)

        return (
            <>
                <ul>
                    {days.map(day => <li key={day}>{day}</li>)}
                </ul>
            </>
        )
    }
}


