
import Card from 'react-bootstrap/Card';

function ContactCard2(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.first_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.last_name}</Card.Subtitle>
                    <Card.Text>{props.phone}</Card.Text>
                    <Card.Text>{props.email}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ContactCard2
