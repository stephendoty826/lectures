
import React, {useState, useEffect} from 'react'

function Forms() {

    const [textValue, setTextValue] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [selectValue, setSelectValue] = useState("Seattle")

    const handleSubmit = (e) => {
        e.preventDefault()

        // send form info to backend

        let formObj = {
            textValue,
            isValid, 
            selectValue
        }

        console.log(formObj);
    }

    return (
        <>
            <h3>{textValue}</h3>
            <h3>{isValid ? "checked" : "unchecked"}</h3>
            <h2>{selectValue}</h2>
            <form onSubmit={handleSubmit}>

                <input type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)}/>
                <input type="checkbox" checked={isValid} onChange={(e)=>setIsValid(e.target.checked)}/>
                <select name="" id="" value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>

                    <option value="Houston">Houston</option>
                    <option value="Atlanta">Atlanta</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Chicago">Chicago</option>
                    <option value="NewYork">New York</option>
                    <option value="SanFransisco">San Fransisco</option>
                </select>
                <input type="submit" />

            </form>
        </>
    )
}

export default Forms
