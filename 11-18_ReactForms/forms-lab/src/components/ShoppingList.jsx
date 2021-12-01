
import React, {useState} from 'react'

function ShoppingList() {

    const [textValue, setTextValue] = useState("")
    const [itemArray, setItemArray] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setItemArray([...itemArray, textValue])
        setTextValue("")
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{padding: "25px"}}>
                <input type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)}/>
                <input type="submit" />
            </form>
            <ul>
                <h3>Grocery List</h3>
                {itemArray.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default ShoppingList
