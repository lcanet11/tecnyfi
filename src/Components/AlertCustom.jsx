import Alert from 'react-bootstrap/Alert';
import React from 'react'

function AlertCustom({variant, text}){
    return(
    <Alert key={variant} variant={variant}>
        {text}
    </Alert>
    )
  
}

export default AlertCustom;