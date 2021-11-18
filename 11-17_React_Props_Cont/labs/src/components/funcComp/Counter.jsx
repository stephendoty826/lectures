
import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count + 10)}>+ 10</button>
            <button onClick={()=>setCount(count + 1)}>+ 1</button>
            <button onClick={()=>setCount(count - 1)}>- 1</button>
            <button onClick={()=>setCount(count - 10)}>- 10</button>
        </>
    )
}

export default Counter
