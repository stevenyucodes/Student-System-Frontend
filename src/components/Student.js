import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import {useState} from 'react'

export default function BasicTextFields() {
    const paperStyle = {padding: '50px 20px', width: 600, margin:"50px auto"}
    const[name, setName] = useState('')
    const[address, setAddress] = useState('')

    const handleClick=(e)=>{
      e.preventDefault()
      const Student={name,address}
      console.log(Student)
      fetch("http://localhost:8080/student/add", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Student)

     }).then(() => {
      console.log("New Student Added")
     })
    }
  return (
    <Box
      
    >
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style = {{color: "black"}}> <u>Add Student</u></h1>
        
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
      value = {name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="filled-basic" label="Student Address" variant="filled" fullWidth
      value ={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      {name}
      {address}
      </Paper>
      <Button variant="contained" onClick={handleClick}>
        Submit
        </Button>
      </Container>
    </Box>
    
  );
}
