
import React, {useState} from 'react'

function AddressBook() {

    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [contactInfoArr, setContactInfoArr] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        setContactInfoArr([...contactInfoArr, {
            nameValue,
            emailValue,
            phoneValue
        }])

        setNameValue("")
        setEmailValue("")
        setPhoneValue("")
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{padding: "25px"}}>
                <label htmlFor="">Name</label>
                <input type="text" value={nameValue} onChange={(e)=>setNameValue(e.target.value)}/><br />
                <br />
                <label htmlFor="">Email</label>
                <input type="text" value={emailValue} onChange={(e)=>setEmailValue(e.target.value)}/><br />
                <br />
                <label htmlFor="">Phone</label>
                <input type="text" value={phoneValue} onChange={(e)=>setPhoneValue(e.target.value)}/><br />
                <br />
                <input type="submit" />
            </form>
            
            <ul>
                <h2>Contact List</h2>
                {contactInfoArr.map((contact, index)=>{
                    return (
                        <div key={index}>
                            <h3>{contact.nameValue}</h3>
                            <li>{contact.emailValue}</li>
                            <li>{contact.phoneValue}</li>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}

export default AddressBook
