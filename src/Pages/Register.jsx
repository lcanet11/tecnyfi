import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
import firebase from '../Config/firebase';
import { useState } from "react"; 
import AlertCustom from "../Components/AlertCustom";
import { registroMessage } from "../Utils/errorMessage";
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Register(){
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const [ alert, setAlert ] = useState({variant:'',text:''})
  const navigate = useNavigate();
  const onSubmit = async data => {
    console.log(data)
    try{
      const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
      console.log("responseUser", responseUser.user.uid);
      if(responseUser.user.uid){
        const document = await firebase.firestore().collection("usuarios")
        .add ({
          name:data.name, 
          lastname:data.lastname,
          userId:responseUser.user.uid 
        })
        console.log(document);
        if(document){
          setAlert({variant:'success',text:'Thank you for registering'})
          navigate("/login")
        }
      }
    } catch(e){
      console.log(e.code);
      setAlert({variant:'danger', text: registroMessage [e.code] || 'There is a registration error.'})
    }
  }
  


  return(
    <>
    <div>
    <AlertCustom {...alert}/>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" {...register("name", { required: true })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" {...register("lastname", { required: true })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter e-mail" {...register("email", { required: true })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password", { required: true, minLength:6,maxLength:12 })}/>
        <Form.Text className="text-muted">
          We do not share your information with third parties. 
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Register; 
