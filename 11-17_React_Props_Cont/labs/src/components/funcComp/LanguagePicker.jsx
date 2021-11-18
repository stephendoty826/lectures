
import React, {useState} from 'react'

function LanguagePicker() {

    const [language, setLanguage] = useState("🇬🇧")

    const [hidden, setHidden] = useState(true)

    const showHideLanguages = (e) => {
        if(hidden === true){
            setHidden(false)
            setLanguage(e.target.textContent)
        }
        else{
            setHidden(true)
            setLanguage(e.target.textContent)
        }
    }

    return (
        <>
            <br />
            <button style={{marginLeft: "110px"}} onClick={(e)=>{showHideLanguages(e)}}>{language}</button>
            <div style={{display: hidden ? "none" : "block"}}>
                <button style={{margin: "10px"}} onClick={(e)=>{showHideLanguages(e)}}>🇬🇧</button>
                <button style={{margin: "10px"}} onClick={(e)=>{showHideLanguages(e)}}>🇰🇷</button>
                <button style={{margin: "10px"}} onClick={(e)=>{showHideLanguages(e)}}>🇯🇵</button>
                <button style={{margin: "10px"}} onClick={(e)=>{showHideLanguages(e)}}>🇲🇽</button>
                <button style={{margin: "10px"}} onClick={(e)=>{showHideLanguages(e)}}>🇩🇪</button>
            </div>
        </>
    )
}

export default LanguagePicker
