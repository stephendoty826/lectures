
import React from 'react'

function Days(props) {
    
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const styles = {
        ulStyle: {
            color: "purple", 
            backgroundColor: "orange"
        },
        buttonStyle: {
            color: "green",
            fontSize: "34px"
        }
    }

    return (
        <>
            <ul style={styles.ulStyle}>
                {days.map((day, key) => <li key={day}>{day}</li>)}
            </ul>
            <button style={styles.buttonStyle}>This is our button</button>
        </>
    )
}

export default Days
