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
//   console.log(questionDetails);

//   try {
//     const response = await fetch(`${server}/api/question-banks/questions/create`, {
//       method: 'POST',
//       body: JSON.stringify(questionDetails),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const data = await response.json();
//     Router.push('/questions/create');
//   } catch (error) {
//     console.log(error);
//   }setDate
// }

const create = ({ questionBanks, suggestions }) => {
  const [value, setValue] = useState(Date | null);
  const [question, setQuestion] = useState('');
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('');

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
        friends:friends
      });
      setQuestion('');
      setExpense('');
      setNotes('');
      setDate('');
      setDescription('');
      setMarks('');
      setTags([]);
      setQuestionBankId('');
      setMessage('Question created successfully!');
      setStatus('success');
    } catch (error) {
      setMessage(error);
      setStatus('danger');
      console.log(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
      setStatus('');
    }, 5000);
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    console.log(name, value);
    const list = [...friends];
    list[index][name] = value;
    setEmail(list);
  };

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  const handleRemoveClick = index => {
    const list = [...friends];
    list.splice(index, 1);
    setEmail(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setEmail([...friends, { option: "", is_email: "" }]);
  };

  return (
    <>
      <Layout auth="true" title="Input">
        <Row>
          <Col breakPoint={{ xs: 12, md: 12 }}>
            <Card>
              <header>
              Add an Expense
              </header>
              <CardBody>
                {/* {message && <Flash message={message} status={status} />} */}
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
                      ADD
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

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/question-banks`, {
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
//   const questionBanks = await res.json();
//   questionBanks.forEach((questionBank) => {
//     suggestions.push(questionBank.type);
//   })
//   return {
//     props: {
//       questionBanks,
//       suggestions
//     },
//   };
// };

export default create;
