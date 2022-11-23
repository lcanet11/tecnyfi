import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, InputGroup } from 'react-bootstrap';
import firebase from '../Config/firebase';
import { useState } from "react"; 
import { useNavigate } from 'react-router-dom';
import { registroMessage } from "../Utils/errorMessage";

function JobUpload() {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    const [ alert, setAlert ] = useState({variant:'',text:''})
    const navigate = useNavigate();
    const onSubmit = async data => {
      console.log(data)
      try{
        const document = await firebase.firestore().collection("productos")
        .add(data)
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





    return(
        <>
          <div>
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" placeholder="Job Title" {...register("title", { required: true })} />
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
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Location" {...register("location", { required: true })} />
            <Form.Text className="text-muted">
                {errors.description && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Snippet</Form.Label>
            <Form.Control type="text" placeholder="Short Summary (One sentence max)" {...register("snippet", { required: true })} />
            <Form.Text className="text-muted">
                {errors.description && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
       
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
          <InputGroup>
          <Form.Control as="textarea" rows={6} aria-label="With textarea" {...register("description", { required: true })} />
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
            <Form.Control type="text"  placeholder="Enter the application link" {...register("link", { required: true })} />
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

export default JobUpload