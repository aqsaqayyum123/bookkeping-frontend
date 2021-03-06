import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
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
   const res = await fetch(`${server}/api/group/groupList`);
   //console.log("user records",res);
   const records = await res.json();
  const headings = ['#', 'Group Name', 'Created At', 'Action'];
  return {
    props: {
      records,
      headings
    },
  };
};
export default index;
