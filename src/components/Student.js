
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';
export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setname]=React.useState('')
    const[address,setadress]=React.useState('')
    const handleclick=(e)=>{
        e.preventDefault()
        const student = {
          "name":name,
          "address":address
        }
        console.log(student)
         fetch("http://localhost:8080/student/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
        }).then(()=>{
          console.log("New student added")
        })
      }
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"black"}}><u> Add Student</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="student name" variant="outlined" fullWidth 
      value={name}
       onChange={(e)=>setname(e.target.value)}
      />
      <TextField id="outlined-basic" label="student address" variant="outlined" fullWidth value={address} 
      onChange={(e)=>setadress(e.target.value)}
      />
      <Button variant="contained" color='secondary' onClick={handleclick}>Submit</Button>
    </Box>
    </Paper>
    </Container>
  );
}
