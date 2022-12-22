import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {Card, Col} from 'react-bootstrap';
import React from 'react';
import JobStyle from "./Job.css"

const styles = {
    card:{
        width: '18rem' 
    },
    buttons:{
        marginRight: "10px"
    }
}

function Job({
    id, 
    title, 
    company,
    snippet,
    description,
    requirements,
    benefits,
    link, 
    login
}){

    return(
        <>
        <Col xs={12} sm={6} lg={4} xxl={3}>
            <Card style={styles.card}>
                <Card.Body>
                    <Card.Title className="title">{title}</Card.Title>
                     <Card.Text>
                        {company}
                    </Card.Text>
                    <Card.Text>
                        {snippet}
                    </Card.Text>
                    <Button style={styles.buttons} as={Link} to={`/job/${id}`} variant="primary">See Details</Button>

                    {login && 
                        <Button styles={styles.buttons} as={Link} to={`/job/edit/${id}`} variant="primary">Edit</Button>
                    }
                    
                </Card.Body>
            </Card>
        </Col>
        </>
      
    )
}

export default Job
