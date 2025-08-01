import React from 'react'
import { useState } from 'react';

const Example = () => {




    const [email, setEmail]= useState([""]);
    const [emailText, setEmailText]= useState("");
    const [error, setError] = useState("");
    

    const handleInput=(e)=>{
      const textcoming= e.target.value;
      setEmailText(textcoming);

      setError("");

    }


    const handleonClick=()=>{

      if(emailText===0)
      setEmail([...email, emailText]);
    }


  return (
    <> 
    <div>xamplddfddfdfde</div>
    <h1>dfsdkfd</h1>
    <input value={emailText} onChange={handleInput} placeholder='Add your email here'></input>
    <button onClick={handleonCLick} style={{ paddingRight: 12}}>Add email</button>
    </>
  )
}

export default Example



// onChange mein call nahin karate pass akrate hain 
// map , filter vali suneja ki video agin --thoda idea
// aaj dubar thodi js , sunc async promises arrow , normal functions 