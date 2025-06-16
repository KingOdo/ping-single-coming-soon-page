"use client";
import { Box, Button, Input, Typography} from '@mui/material'
import  { useState } from "react";

const Email = () => {
  const [isValid, setisValid]= useState(true);
 const isEmail = (email: string) => {
   // Simple and valid email regex. printed from aI
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 };

const validate =(email:string) => {
  const isValidEmail= isEmail(email) 
  if(isValidEmail){
    setisValid(true);
  } else{
    setisValid(false);
  }
};

  return (
    <Box sx={{marginBottom:"4rem"}}>
      <Input className='email-input' sx={{border: `1px solid ${isValid ? "#B8C7ED" : "#FF5466" }`, borderRadius:"2rem", color:"#B8C7ED",
      width:"26.3125rem", padding:"0.5rem 1rem", 
      marginRight:"1rem",
      }} 
      onChange={(e) => {validate(e.target.value)}}
      placeholder='Your email address...' />

      {isValid ? null:(
        <Typography sx={{color:"#FF5466"}}>Please provide a valid email address</Typography>)
      }
      <Button className='notify-btn' sx={{backgroundColor:"#4C7BF3", color:"#FFF", borderRadius:"2rem", padding:"0.5rem 1rem", width:"200px", height:"3.5rem" }}>Notify Me</Button>
    </Box>

  )
}

export default Email