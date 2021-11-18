
import Card from './ContactCard2'

function ContactList2({data}) {
    return (
        <>
            <div className="row">
                {data.map((obj, index) => {
                    return (
                        <div style={{paddingTop: "15px"}} className="col-3" key={index}>
                            <Card 
                                first_name={obj.first_name}
                                last_name={obj.last_name}
                                phone={obj.phone}
                                email={obj.email}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ContactList2
