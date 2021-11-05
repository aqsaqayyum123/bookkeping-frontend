import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Router from 'next/router';
import { server } from '../../config';

const theme = createTheme();
async function sendUserData(userDetails:any) {
console.log('user data',userDetails);
  try {
      return await fetch(`${server}/api/user/signUp`, {
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

export default function SignUp() {
    async function sendMessageHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const myData = new FormData(event.currentTarget);
            const data = {
              name: myData.get('name'),
              email: myData.get('email'),
              password: myData.get('password'),
            }
            //console.log("data",data);

            const response: any = await sendUserData(data);
            console.log("response ",response);
            //const result:any = await response.json();
            //console.log("checking result:::",result);
            Router.push('/');
        } catch (error) {
            Router.push('/auth/signup');
        }
    }

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
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            //onSubmit={handleSubmit}
            onSubmit={sendMessageHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='given-name'
                  name='name'
                  required
                  fullWidth
                  id='name'
                  label='Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='signin' >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
