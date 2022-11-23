import React from 'react'
import { useState, useEffect } from 'react'
import { getMoreJobs } from '../Services/jobsServices'

function MoreJobs(){

    const result = getMoreJobs()
    console.log(result);
    
  
        return (
            <div>

            </div>
        )
}

export default MoreJobs