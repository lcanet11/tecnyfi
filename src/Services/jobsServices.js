import instance from "../Config/axios"
import firebase from '../Config/firebase'
import axios from 'axios'

export async function getAllJobs(buscar){
   const querySnapshot = await firebase.firestore().collection("productos")
   .get()
   return querySnapshot.docs
}

export async function getByIdJobs(id){
    const querySnapshot = await firebase.firestore().doc(`productos/${id}`).get()
    return querySnapshot 
}

export async function update(id,payload){
    return await firebase.firestore().doc(`productos/${id}`).set(payload)
}

export async function deleteJobs(id){
    return await firebase.firestore().doc(`productos/${id}`).delete()
}


export async function getMoreJobs(search){
        let result = null
      
        try {
          const jobs = await axios.get('https://api.ziprecruiter.com/jobs/v1?search=Perl%20Job&location=Santa%20Monica,%20CA&radius_miles=25&days_ago=&jobs_per_page=10&page=1&api_key=qfbg3uitqk8q2zb4jd2vwhwze469g35z')
          result = jobs.data
        } catch (error) {
          console.log(error)
        }
      
    return result
}


