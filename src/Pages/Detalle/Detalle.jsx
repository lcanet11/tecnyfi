import { useParams, Link } from "react-router-dom"
import { getByIdJobs } from "../../Services/jobsServices"
import { useState, useEffect } from 'react';
import Loading from "../../Components/Loading/Loading";
import React from 'react';
import Button from 'react-bootstrap/Button'
import Details from "./Detalle.css"



function Detalle() {
    const {id}= useParams()
    
    const [job, setJob] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const result = async ()=>{
            try {
                const jobData = await getByIdJobs(id)
                if(jobData){
                    setJob(jobData.data())
                }
                setIsLoading(false)
            } catch(e){
                console.log(e);
            }
        }
        result()
    }, [id]
    )


        return(
            <Loading loading={isLoading} >
            <div>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p className="snippet">{job.snippet}</p>
                <p className="desc">{job.description}</p>
                <p className="recs">{job.requirements}</p>
                <p className="bennies">{job.benefits}</p>
                <a href={job.link} target="_blank" rel="noreferrer">
                <Button>Apply</Button>
                </a>
            </div>
            </Loading>
        )

}

export default Detalle 