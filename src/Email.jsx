import React from 'react'
import { useState } from 'react';

const Example = () => {




    const [email, setEmail]= useState([]);
    const [emailText, setEmailText]= useState("");
    const [error, setError] = useState("");
    

    const handleInput=(e)=>{
      const textcoming= e.target.value;
      setEmailText(textcoming);

      setError("");

    }


    const handleonCLick=()=>{

      setError("");

      if(emailText.trim().length===0)
      setError("Email is required, Fill the email form please");
      else if(emailText.length>29){
        setError("Email should be less than 30 characters");
      }else if(!emailText.includes("@") || (!emailText.includes("."))){
        setError("Email should contain @ symbol");
      }else
      {
        setEmail([...email,emailText]);
        setEmailText("");
      }
    }


  return (
    <> 
    
    <h1>Check your emails here</h1>
    <input value={emailText} onChange={handleInput} placeholder='Add your email here'></input>
    <button onClick={handleonCLick} style={{ paddingRight: 12}}>Add email</button>
    
     {/* if error exists, then show error with a red boundary otherwise show the list of emails */}
     {error ? (
  <div style={{ color: "red" }}>{error}</div>
) : (
  <ul>
    {email.map((text, idx) => <li key={idx}>{text}</li>)}
  </ul>
)}
  <div>----------------------------------------------------------------------------------------------------------------------------------------------</div>
    </>
  )
}

export default Example



// onChange mein call nahin karate pass akrate hain 
// map , filter vali suneja ki video agin --thoda idea
// aaj dubar thodi js , sunc async promises arrow , normal functions