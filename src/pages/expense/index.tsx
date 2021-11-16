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
                Expenses
              </header>
              <CardBody>
                <Table fileName="Expense" headings={headings} records={records}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
   const res = await fetch(`${server}/api/expense/expenseList`);
   const records = await res.json();
  const headings = ['#', 'Detail','Friends','Amount','Date', 'Created At','Action'];
  return {
    props: {
      records,
      headings
    },
  };
};
export default index;
