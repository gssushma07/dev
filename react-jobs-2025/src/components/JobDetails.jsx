import React from 'react'
import { useLoaderData } from 'react-router-dom'




const JobDetails = () => {

 const jobDetails = useLoaderData();

  return (
    <div className='job-details'>
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Salary: </b>{jobDetails.salary}</p>
        <p><b>Job Location: </b>{jobDetails.location}</p>
        <p><b>Description: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores maxime nemo atque nam quasi ea reprehenderit optio inventore expedita!</p>
        <button>Apply Now</button>
        
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;
    const res = await fetch("http://localhost:4000/jobs/" + id);
    if(!res.ok){
        throw Error("Could not found job details")
    }
    return res.json();
}




