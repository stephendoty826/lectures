
import React, {useState} from 'react'

function Fireworks() {
    
    const[boom, setBoom] = useState("🧨")

    // let boomFunc = () => { // with a function
    //     if(boom === "🧨"){
    //         setBoom("💥")
    //     }
    //     else{
    //         setBoom("🧨")
    //     }
    // }
    
    return (
        <>
            <h1>{boom}</h1>
            {/* <button onClick={boomFunc}>Boom</button> // with a function */}

            {/* same things as above but with a terinary operator */}
            <button onClick={()=>{boom === "🧨" ? setBoom("💥") : setBoom("🧨")}}>Boom</button>
        </>
    )
}

export default Fireworks
