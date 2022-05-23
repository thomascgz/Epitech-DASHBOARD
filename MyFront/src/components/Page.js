import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUp from './SignUp';
import axios from "axios";
import Widget from './Widget';

const theme = createTheme();

export default function Page(props) {
  const [log, setlog] = useState(false);
  const [user, setuser] = useState("");

  const getList = () => {
    axios.get("/List")
    .then(res => console.log("List"))
    .catch(err => console.log("Error" + err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
    axios.post("/SignIn", { username: data.get('username'),  password: data.get('password')})
    .then(res => {
      if (res.data === true) {
        alert("Succesfully conected !")
        setuser("/ User : " + data.get('username'))
        setlog(true)
      } else {
        alert("Username or Password incorrect !")
      }
    })
    .catch(err =>	{
      console.log(err);
    });
  };

  if (props.page === true) {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
        <SignUp/>
      </ThemeProvider>
    );
  } else {
    getList()
    return (
      <Widget log={log} username={user}/>
    );
  }
}
