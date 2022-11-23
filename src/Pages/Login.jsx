import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import firebase from '../Config/firebase'
import { useState } from "react"; 
import React from 'react';

function Login({setLogin}){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async data => {
    console.log(data)
    try{
      const responseUser = await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
      console.log("responseUser", responseUser.user.uid)
      if(responseUser.user.uid){
        setLogin(true)
        navigate("/")
      }
    } catch(e){
      console.log(e)
    }
  }
 
  // const [ alert, setAlert ] = useState({variant:'',text:''})

  // if(document){
  //   setAlert({variant:'success',text:'You are now logged in'})
  //   navigate("/productos/alta")
  // }


  return(
    <>
      <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password", { required: true, minLength:6,maxLength:12 })}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      </Form>
      </div>
    </>
  )
}

export default Login; 
