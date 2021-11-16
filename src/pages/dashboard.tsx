import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from 'Layouts';
import { Card, CardBody } from '@paljs/ui/Card';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '@mui/material/Button';
//import { ButtonLink } from '@paljs/ui/Button';
//import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
//import { EvaIcon } from '@paljs/ui/Icon';
//import Image from 'next-images';
//import img from '../../public/img1.jpg';

//module.exports = withImages()
//import imgPath from '../../public/abc.png';

const ErrorStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  small {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  a {
    max-width: 20rem;
  }
`;

const imgPath1 = require('../../public/images/abc.png');
const index = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
      // router.push('/dashboard');
    setAuth(user ? true : false);

  }),[];
  return (
    <>
      <Layout auth='true'>
        <div style={{ width: '70%' }}>
          <div style={{ display: 'inline-flex' }}>
            <h4>Dashboard</h4>
            <div style={{ right: '25em', position: 'absolute',top:'6.6em' }}>
            <Link href={`/expense/create`}>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, marginTop: 'auto' }} >Add an Expense</Button>
            </Link>
            </div>
          </div>
          <Card style={{ marginTop: '3rem'}}>
            <CardBody>
                <Row>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <img src={'https://assets.splitwise.com/assets/fat_rabbit/empty-table-effed2a2e610373b6407d746cb95858f5d47329c8610bb70f1fd2040dfa35165.png'} />

                    {/* <img src={imgPath1} height={'20px'} width={'20px'}/> */}
                    {/* <img src={process.env.PUBLIC_URL + '/abc.png'} alt="logo" /> */}
                    </Col>

                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <h3>You’re all settled up. Awesome!</h3>
                      <h6>To add a new expense, click the blue “Add an expense” button.</h6>
                    </Col>
                </Row>
            </CardBody>
          </Card>
        </div>
      </Layout>
    </>
  );
};
export default index;
