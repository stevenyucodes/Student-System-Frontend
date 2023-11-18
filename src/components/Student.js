import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import {useState} from 'react'

export default function BasicTextFields() {
    const paperStyle = {padding: '50px 20px', width: 600, margin:"50px auto"}
    const[name, setName] = useState('')
    const[address, setAddress] = useState('')
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
      </Container>
    </Box>
    
  );
}
