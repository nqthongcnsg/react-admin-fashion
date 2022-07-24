import React ,{useState,useEffect}from 'react'


const Test=()=>{
   const [text,setText]=useState([]);

   useEffect(()=>{

   },[text])
    return(
        <>
        <div id='banner'></div>

        <input type='text'/>
        </>
    )
}

export default Test;