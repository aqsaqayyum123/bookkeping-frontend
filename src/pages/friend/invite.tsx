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
//   }
// }
const create = ({ questionBanks, suggestions }) => {
  const [question, setQuestion] = useState('');
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
        friends:friends
      });
      setQuestion('');
      setDescription('');
      setMarks('');
      setTags([]);
      setQuestionBankId('');
      setEmail([{ option: "", is_email: "" }]);
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


  return (
    <>
      <Layout auth="true" title="Input">
        <Row>
          <Col breakPoint={{ xs: 12, md: 6 }}>
            <Card>
              <header>
              Invite friends
              </header>
              <CardBody>
                {/* {message && <Flash message={message} status={status} />} */}
                <form onSubmit={sendMessageHandler}>
                    <div>
                        <Row>
                            <Col breakPoint={{ xs: 12, md: 12}}>
                                <input
                                    className="form-control mb-2"
                                    placeholder="Enter names or email addresses"
                                    required
                                    value={question}
                                    onChange={(event) => setQuestion(event.target.value)}
                                ></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col breakPoint={{ xs: 12, md: 12 }}>
                                <textarea
                                    className="form-control mb-2"
                                    placeholder="Description"
                                    required
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                ></textarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col breakPoint={{ xs: 12, md: 12 }}>
                                <button className="w-25 btn btn-primary" type="submit">
                                Send invite
                                </button>
                            </Col>
                        </Row>
                    </div>
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
