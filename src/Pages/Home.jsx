import React from 'react'; 
import Jobs from '../Components/Jobs/Jobs';
import firebase from '../Config/firebase'

function Home(){
  console.log(firebase)
  return(
    <>
      <div>
        <Jobs />
      </div>
    </>
  )
}

export default Home; 
