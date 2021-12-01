
import React, {useState} from 'react'

function ColorPicker() {

    const [color1, setColor1] = useState("#000000")
    const [color2, setColor2] = useState("#000000")
    const [gradientColorsArr, setGradientColorsArr] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        setGradientColorsArr([...gradientColorsArr, {color1, color2}])

    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{padding: "15px"}}>
                <label htmlFor="" style={{padding: "10px"}}>Color 1</label>
                <input type="color" value={color1} onChange={(e)=>setColor1(e.target.value)}/>
                <br />
                <br />
                <label htmlFor="" style={{padding: "10px"}}>Color 2</label>
                <input type="color" value={color2} onChange={(e)=>setColor2(e.target.value)}/><br />
                <br />
                <input type="submit" />
            </form>
            {gradientColorsArr.map((gradient, index)=>{
                return <div key={index} style={{background: `linear-gradient(${gradient.color1}, ${gradient.color2})`, height: "200px", width: "200px", margin: "25px"}}></div>
            })}
        </>
    )
}

export default ColorPicker
