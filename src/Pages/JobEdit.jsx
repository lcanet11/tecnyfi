import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getByIdJobs, update, deleteJobs } from "../Services/jobsServices";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { registroMessage } from "../Utils/errorMessage";


function JobEdit() {
    const {id} = useParams();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm(); 
    const [ alert, setAlert ] = useState({variant:'',text:''})
    const navigate = useNavigate();
    
    useEffect(() => {
        const result = async ()=>{
            try {
                // const responseData = await getByIdProductos(id)
                // setProducto(responseData.data)
                const jobData = await getByIdJobs(id)
                if(jobData){
                    setValue("title", jobData.data().title)
                    setValue("company", jobData.data().company)
                    setValue("snippet", jobData.data().snippet)
                    setValue("description", jobData.data().description)
                    setValue("requirements", jobData.data().requirements)
                    setValue("benefits", jobData.data().benefits)
                    setValue("link", jobData.data().link)
                }
            } catch(e){
                console.log(e);
            }
        }
        result()
    }, [id]
    )

    
    
    
    const onSubmit = async data => {
      console.log(data)
      try{
        update(id,data)
        console.log(document)
        if(document){
          setAlert({variant:'success',text:'Thank you for posting!'})
          navigate("/")
        }
      } catch(e){
        console.log(e);
        setAlert({variant:'danger', text: registroMessage [e.code] || 'There is an upload error. Please try again!'})
      }
    }

    const handleDelete = async ()=>{
        try{
            const document = await deleteJobs(id)
            console.log(document)
        } catch(e){
            console.log(e)
        }
    }

    return(
        <>
          <div>
            <Button onClick={handleDelete} variant="danger">Delete</Button>

          <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" placeholder="Title" {...register("title", { required: true })} />
            <Form.Text className="text-muted">
                {errors.name && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Company" {...register("company", { required: true })} />
            <Form.Text className="text-muted">
                {errors.price && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Snippet</Form.Label>
            <Form.Control type="text" placeholder="Snippet" {...register("snippet", { required: true })} />
            <Form.Text className="text-muted">
                {errors.description && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
            <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" {...register("description", { required: true })} />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Requirements</Form.Label>
          <InputGroup>
          <Form.Control as="textarea" rows={6} aria-label="With textarea" {...register("requirements", { required: true })} />
          </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Benefits</Form.Label>
          <InputGroup>
          <Form.Control as="textarea" rows={6} aria-label="With textarea" {...register("benefits", { required: true })} />
          </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Application Link</Form.Label>
            <Form.Control type="text" placeholder="Enter the application link" {...register("link", { required: true })} />
            <Form.Text className="text-muted">
                {errors.description && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
       
       
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
          </div>
        </>
      )
}

export default JobEdit