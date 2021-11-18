
import React from 'react'
import Card from './ContactCard'

function ContactList({data}) {
    // console.log(data);
    return (
        <>
        <div className="row">
                {data.map((obj, index) => {
                    return (
                    <div className="col-3" key={index}>
                        <Card 
                        imgURL={obj.imgURL} 
                        name={obj.name} 
                        phone={obj.phone} 
                        email={obj.email} />
                    </div>
                    )
                })}
        </div>
            
        </>
    )
}

export default ContactList
