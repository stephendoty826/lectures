
import React, {useState} from 'react'

function Counter() {
    
    const [count, setCount] = useState(0)
    // count = 0
    // setCount = function

    // onClick = () => {
    //   return setCount

    return (
        <>
            <h1>{count}</h1>
            <button style={{margin: "10px"}} onClick={() => setCount(count + 1)}>Increment +</button>
            <button style={{margin: "10px"}} onClick={() => setCount(0)}>Reset</button>
            <button style={{margin: "10px"}} onClick={() => setCount(count - 1)}>Decrement -</button>
        </>
    )
}

export default Counter
