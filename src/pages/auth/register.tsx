//import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Auth from 'components/Auth';
import Router from 'next/router';
import { server } from '../../../config/index';
import Layout from 'Layouts';

const Input = styled(InputGroup)`
  margin-bottom: 2rem;
`;


async function sendUserData(userDetails:any) {
  console.log('user data testing',userDetails);
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

// const Checkbox = props => (
//   <input type="checkbox" {...props} />
// )
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
        const response: any = await sendUserData({
          name : name,
          password: password,
          email: email,
        });
        console.log("response1 ",response);
        const result = await response.json();
        // setName('');
        // setEmail('');
        // setPassword('');
        //const result:any = await response.json();
        //console.log("checking result:::",result);
        Router.push('login');
    } catch (error) {
        Router.push('/auth/register');
    }
}
  //const onCheckbox = () => {
    // v will be true or false
  //};

  // const Checkbox = props => (
  //   <input type="checkbox" {...props} />
  // )

  //state = { checked: false }

  // handleCheckboxChange = event =>
  //   this.setState({ checked: event.target.checked })

  return (
    <Layout title="Register">
      <Auth title="Create Account">
        <form onSubmit={sendMessageHandler}>
          <InputGroup fullWidth>
            <input type="name" placeholder="Username" required value={name}
              onChange={(event) => setName(event.target.value)}/>
          </InputGroup>
          <InputGroup fullWidth>
            <input type="email" placeholder="Email Address" required value={email}
              onChange={(event) => setEmail(event.target.value)}/>
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" placeholder="Password" required value={password}
              onChange={(event) => setPassword(event.target.value)}/>
          </InputGroup>
          {/* <div>
            <label>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              <span>Label Text</span>
            </label>
          </div> */}
          {/* <Checkbox onChange={onCheckbox} >
            Agree to Terms & Conditions
            <Link href="/">
              <a>Terms & Conditions</a>
            </Link>
          </Checkbox> */}
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'black' }}
            >
              Sign Up
            </Button>
          {/* <Button status="Success" type="button" shape="SemiRound" halfWidth>
            Sign Up
          </Button> */}
        </form>
        <p>
          Already have an account?{' '}
          <Link href="/auth/login">
            <a>Sign In</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
}
