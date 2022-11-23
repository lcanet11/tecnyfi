import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './Loading.css'

function Loading({children, loading}){
    if(loading){
        return(
            <div className="spinner">
                <Spinner animation="grow" />
            </div>
        )
    }else{
        return(
            <>
            {children}
            </>
        )
    }
}

export default Loading