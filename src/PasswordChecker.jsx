import React from 'react'
import {useState} from 'react'

const PasswordChecker = () => {

    const [passtext, setPasstext]= useState("");
    const [password, setPassword]= useState([]);
    const [error, setError]= useState([]);
  

 



    const handleInput =(e)=>{
        setError([]);
        const text=e.target.value;
        setPasstext(text);
    }


const handleButton=()=>{
setError([]);

const newErrors=[];
       const hasNumber = /[0-9]/.test(passtext);
    const hasUpper = /[A-Z]/.test(passtext);
const hasLower = /[a-z]/.test(passtext);
    if(passtext.trim().length<8){
        newErrors.push("PAss should be more than 8 chars");
    }
     if(!hasNumber){
       newErrors.push("PAss should atleast have a number in it");
    }
     if(!hasUpper){
        newErrors.push("Pass should have a uppercase character");
    }
     if(!hasLower){
        newErrors.push("PAss should have a lowercase character");
    }
    if(newErrors.length>0){
        setError(newErrors);
       }else{
        setPassword([...password,passtext]);
        setPasstext("");
       }
    

}



  return (
    <>
    {/* Pass word checker app-so  */}
    <h1>Check Your password here</h1>
    <input value={passtext} onChange={handleInput} placeholder='  Enter your password'></input>
    <div>
      <button onClick={handleButton} style={{color:"red", margin:"10px"}}>Add password</button>
      {error.length>0 ? <div><ul>{error.map((text,idx)=><li key={idx}>{text}</li>)}</ul></div>: <ul>{password.map((text,idx)=> <li key={idx} >{text}</li>)}</ul>}
      <div>----------------------------------------------------------------------------------------------------------------------------------------------</div>
    </div>
    </>
  )
}

export default PasswordChecker
