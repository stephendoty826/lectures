
import React, {useState} from 'react'

function StatusPicker() {
    
    const [status, setStatus] = useState("Active")
    
    return (
        <>
            <h1>{"Status: " + status}</h1>
            <button onClick={()=>{setStatus("Active")}}>Active</button>
            <button onClick={()=>{setStatus("Away")}}>Away</button>
            <button onClick={()=>{setStatus("Offline")}}>Offline</button>
        </>
    )
}

export default StatusPicker
