import React from 'react'

const useInput = ({initialValue="",validation}) => {



  const [value,setValue ] = useState(initialValue, validate);

  const[error, setError]= useState("");
  const[isValid, setIsValid]= useState(false);


  if(validate){
    const result = validate(value);
    if(typeof result === "string"){
      setError(result);
      setIsValid(false);
    }else if(result){
      setError("");
      setIsValid(true);
    }else{
      setError("");
      setIsValid(false);
    }
  }




  const onChange=(e)=>{ const result1= e.target.value; setValue(result1);};
  const reset=()=>{
    setValue(initialValue);
    setError("");
  };
  return {
    value,
    onChange,
    reset,isValid,error
  }
}

export default useInput


https://www.instagram.com/reels/DND2pVZStLg/



//a input hoook taht gives a function -the function helps to change incoming value of tht state
//also a reset function there to reset the value
// also return the state


