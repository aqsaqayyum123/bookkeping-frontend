import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import { server } from '../../../config/index';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Flash from '../../components/Flash';
import ReactTagInput from "next-js-suggest-input";
import { Checkbox } from '@paljs/ui/Checkbox';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// async function sendQuestionData(questionDetails) {
//   try {
//     const response = await fetch(`${server}/api/question-banks/questions/${questionDetails.id}/update`, {
//       method: 'PUT',
//       body: JSON.stringify(questionDetails),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJyb2xlX2lkIjo3LCJlbWFpbCI6ImZ1cnFhbi5heml6QGludm96b25lLmNvbSIsImlhdCI6MTYzNTc1MTI2NiwiZXhwIjoxNjM1NzUxMzI2fQ.YWjJFFedq1N8XD6Mw2dQvJ0_UNVnuPPB3MH2dgO4ZUw',
//       },
//     });
//     console.log(response);
//     if (response.status == 404) {
//       Router.push(`/question/${questionDetails.id}`);
//     }
//     Router.push('/questions');
//   } catch (error) {
//     console.log(error);

//     Router.push('/404');
//   }
// }
const update = ({ questionRecord, questionBanks, suggestions }) => {
  // const [question, setQuestion] = useState(questionRecord.question);
  // const [description, setDescription] = useState(questionRecord.description);
  // const [marks, setMarks] = useState(questionRecord.marks);
  // const [questionBankId, setQuestionBankId] = useState(questionRecord.question_bank_id);
  // const [tags, setTags] = useState([questionRecord.tags]);
  // const [options, setOptions] = useState(questionRecord.options.length ?questionRecord.options : [{ text: "", is_correct: false }]);
  const [value, setValue] = useState(Date | null);
  const [question, setQuestion] = useState('');
  const [expense, setExpense] = useState('');
  const [notes, setNotes] = useState('');
  const [description, setDescription] = useState('');
  const [marks, setMarks] = useState('');
  const [questionBankId, setQuestionBankId] = useState('');
  const [tags, setTags] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');


  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      await sendQuestionData({
        question: question,
        description: description,
        tags: tags,
        marks: marks,
        question_bank_id: questionBankId,
        options:options,
        id: questionRecord.id,
      });
      setQuestion('');
      setExpense('');
      setNotes('');
      setDescription('');
      setMarks('');
      setTags([]);
      setQuestionBankId('');
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <>
      <Layout auth="true" title="Input">
        <Row>
          <Col breakPoint={{ xs: 12, md: 12 }}>
            <Card>
              <header>
               Update Expense
                {/* <p>
                  <Link href="/">
                    <a>Dashboard</a>
                  </Link>{' '}
                  /{' '}
                  <Link href="/questions">
                    <a>Questions</a>
                  </Link>{' '}
                  / create
                </p> */}
              </header>
              <CardBody>
                <form onSubmit={sendMessageHandler}>
                  <Row>
                  <Col breakPoint={{ xs: 12, md: 6}}>
                      <input
                        className="form-control mb-2"
                        placeholder="Enter name or email addresses"
                        required
                        value={question}
                        onChange={(event) => setQuestion(event.target.value)}
                      ></input>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6}}>
                      <input
                        className="form-control mb-2"
                        placeholder="Enter Total Expense"
                        required
                        value={expense}
                        onChange={(event) => setExpense(event.target.value)}
                      ></input>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 12 }}>
                        <textarea
                            className="form-control mb-2"
                            placeholder="Description"
                            required
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        ></textarea>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                        <textarea
                            className="form-control mb-2"
                            placeholder="Notes"
                            required
                            value={notes}
                            onChange={(event) => setNotes(event.target.value)}
                        ></textarea>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                        label="Select Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                    </LocalizationProvider>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <select className="form-control mb-2" onChange={(event) => setQuestionBankId(event.target.value)}>
                          <option value="">Expense Split Type</option>
                          <option value="equally">Equally</option>
                          <option value="exactamount">Exact Amount</option>
                          <option value="shares">Shares</option>
                          <option value="adjustment">Adjustment</option>
                        </select>
                    </Col>
                    <Col className="text-center" breakPoint={{ xs: 12, md: 12 }}>
                    <button className="w-25 btn btn-primary" type="submit">
                      Update Expense
                    </button>
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

// export async function getStaticPaths() {
//   const res = await fetch(`${server}/api/question-banks/questions`, {
//     body: JSON.stringify({
//       question_bank_id: 2,
//     }),
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJyb2xlX2lkIjo3LCJlbWFpbCI6ImZ1cnFhbi5heml6QGludm96b25lLmNvbSIsImlhdCI6MTYzNTc1MTI2NiwiZXhwIjoxNjM1NzUxMzI2fQ.YWjJFFedq1N8XD6Mw2dQvJ0_UNVnuPPB3MH2dgO4ZUw',
//     },
//   });
//   const questions = await res.json();
//   const paths = questions.map((question) => ({
//     params: { id: question.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`${server}/api/question-banks/questions/${params.id}/show`, {
//     method: 'POST',
//     body: JSON.stringify({
//       id: params.id,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJyb2xlX2lkIjo3LCJlbWFpbCI6ImZ1cnFhbi5heml6QGludm96b25lLmNvbSIsImlhdCI6MTYzNTc1MTI2NiwiZXhwIjoxNjM1NzUxMzI2fQ.YWjJFFedq1N8XD6Mw2dQvJ0_UNVnuPPB3MH2dgO4ZUw',
//   });
//   const questionRecord = await res.json();

//   const response = await fetch(`${server}/api/question-banks`, {
//     body: JSON.stringify({
//       user_id: 6,
//     }),
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJyb2xlX2lkIjo3LCJlbWFpbCI6ImZ1cnFhbi5heml6QGludm96b25lLmNvbSIsImlhdCI6MTYzNTc1MTI2NiwiZXhwIjoxNjM1NzUxMzI2fQ.YWjJFFedq1N8XD6Mw2dQvJ0_UNVnuPPB3MH2dgO4ZUw',
//     },
//   });
//   const suggestions = [];
//   const questionBanks = await response.json();
//   questionBanks.forEach((questionBank) => {
//     suggestions.push(questionBank.type);
//   })
//   return { props: { questionRecord, questionBanks, suggestions } };
// }

export default update;
