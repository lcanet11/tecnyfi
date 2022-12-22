import React from 'react'; 
import Jobs from '../Components/Jobs/Jobs';
import firebase from '../Config/firebase'

function Home({login}){
  console.log(firebase)
  return(
    <>
      <div>
        <Jobs login={login} />
      </div>
    </>
  )
}

export default Home; 
