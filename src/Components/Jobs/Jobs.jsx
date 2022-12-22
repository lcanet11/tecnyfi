import React, {useState, useEffect} from 'react';
import Job from '../Job';
import { getAllJobs } from "../../Services/jobsServices";
import { Row, Form } from 'react-bootstrap';
import styled from 'styled-components';
import Loading from '../Loading/Loading';

function Jobs({login}){
    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [buscar] = useState('Senior Director')

    useEffect(() => {
        const result = async ()=>{
            try {
                const jobs = await getAllJobs(buscar)
                console.log(jobs);
                setJobs(jobs);
                setIsLoading(false)
            } catch(e){
                console.log(e);
            }

        }

        result()
    }, [buscar]
    )

    const filtrar = () => {

        setJobs([{
            title: 'Senior Director'
        }])
        
    }

    return(
        <Loading loading={isLoading} >
            <br />
        <div >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                {jobs.map(job => <Job login={login} key={job.id} {...job.data()} id={job.id} />)}
                </Row>
            </Form.Group>       
            </div>
            </Loading>
        )
    }


export default Jobs;
