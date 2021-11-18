
import React, { Component } from 'react'

export default class DropDown extends Component {
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

        return (
            <>
                <select>
                    <option hidden value="defaultValue">Pick a Day</option>
                    {days.map(day => <option key={day} value={day}>{day}</option>)}
                </select>
            </>
        )
    }
}
