import Button from '@mui/material/Button';
//import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import Auth, { Group } from 'components/Auth';
import Layout from 'Layouts';
import { server } from '../../../config/index';

async function sendUserData(userDetails) {
  console.log("user detail",userDetails);

  try {
    return await fetch(`${server}/api/user/logIn`, {
      method: 'POST',
      body: JSON.stringify(userDetails),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
}
const login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  //const [auth, setAuth] = useState(false);
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //     // router.push('/dashboard');
  //   setAuth(user ? true : false);

  // }),[];
  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      const response = await sendUserData({
        password: password,
        email: email,
      });
      //console.log("res",response);
      const result = await response.json();
      //console.log("result",result);

      // setEmail('');
      // setPassword('');

      Router.push('/dashboard');
    } catch (error) {
      // console.log('error',error);

      Router.push('/auth/login');
    }
  }
  return (
    <Layout title="Sign In" >
      <Auth title="Sign In">
        <form onSubmit={sendMessageHandler}>
          <InputGroup fullWidth>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputGroup>
          <InputGroup fullWidth>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputGroup>
          <Group>
            <Link href="#">
              <a className="text-end">Forgot Password?</a>
            </Link>
          </Group>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'black'  }}
            >
              Sign In
            </Button>
          {/* <Button status="Success" type="submit" shape="SemiRound" fullWidth>
            Login
          </Button> */}
        </form>
        <p className="text-center">
          Don&apos;t have account?{' '}
          <Link href="/auth/register">
            <a>Create New Account</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
};
export default login;
