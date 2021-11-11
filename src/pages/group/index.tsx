import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import Table from '../../components/Table';

import { server } from '../../../config/index';

const index = ({ records, headings }) => {
  return (
    <>
      <Layout title="Input">
        <Row>
          <Col breakPoint={{ xs: 12, md: 12 }}>
            <Card>
              <header>
                Groups
                {/* <p>
                  <Link href="/">
                    <a>Dashboard</a>
                  </Link>{' '}
                  /{' '}
                  <Link href="/roles">
                    <a>Roles</a>
                  </Link>{' '}
                  / view
                </p> */}
                {/* <Link href="/roles/create">
                  <button className="btn btn-primary">Add A New Role</button>
                </Link> */}
              </header>
              <CardBody>
                <Table fileName="Group" headings={headings} records={records}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/getUser`);
//   const records = await res.json();
     const records =  [{
        "id": "2",
        "name": "First Group",
        "createdAt": "2021-11-08T08:11:44.691Z",
        //"Action": "2021-11-08T08:11:44.691Z"
    }];

  const headings = ['#', 'Group Name', 'Created At', 'Action'];
  return {
    props: {
      records,
      headings
    },
  };
};
export default index;
