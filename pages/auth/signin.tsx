import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//import { useState, useEffect } from 'react';
import Router from 'next/router';
//import Auth, { Group } from 'components/Auth';
//import Layout from 'Layouts';
import { server } from '../../config';

const theme = createTheme();

async function sendUserData(userDetails: any) {
  console.log(userDetails);

  try {
    return await fetch(`${server}/api/user/login`, {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export default function SignIn() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const myData = new FormData(event.currentTarget);
      const data = {
        //name: myData.get('name'),
        email: myData.get('email'),
        password: myData.get('password'),
      };
      console.log('testing signin data', data);

      const response: any = await sendUserData(data);
      console.log(response);
      //const result: any = response.json();
     // console.log('response:', result);
      Router.push('../dashboard');
    } catch (error) {
      Router.push('/auth/signup');
    }
    //const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  }

  // const [password, setPassword] = useState('');
  //   const [email, setEmail] = useState('');
  //   async function sendMessageHandler(event) {
  //       event.preventDefault();
  //       try {
  //           const response = await sendUserData({
  //             password: password,
  //             email: email,
  //           });

  //           const result = await response.json();
  //           setEmail('');
  //           setPassword('');
  //           console.log(result);

  //           Router.push('/auth/login');
  //       } catch (error) {
  //           Router.push('/auth/login');
  //       }
  //   }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='signup'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
