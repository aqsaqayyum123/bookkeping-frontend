import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import { useState, useEffect } from 'react';

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
  const [friends, setEmail] = useState([{ option: "", is_email: "" }]);

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

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    console.log(name, value);
    const list = [...friends];
    list[index][name] = value;
    setEmail(list);
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
                Start A New Group
              </header>
              <CardBody>
                {/* {message && <Flash message={message} status={status} />} */}
                <form onSubmit={sendMessageHandler}>
                  <Row>
                    <Col breakPoint={{ xs: 12, md: 6}}>
                      <input
                        className="form-control mb-2"
                        placeholder="My group shall be called…"
                        required
                        value={question}
                        onChange={(event) => setQuestion(event.target.value)}
                      ></input>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <select className="form-control mb-2" onChange={(event) => setQuestionBankId(event.target.value)}>
                          <option value="">Select Group Type</option>
                          <option value="volvo">Home</option>
                          <option value="saab">Trip</option>
                          <option value="opel">Other</option>
                        </select>
                    </Col>
                    <Col breakPoint={{ xs: 12, md:12}}>
                    <fieldset className="p-3 w-100 border mb-3 mt-3">
                        <h6>GROUP MEMBERS</h6>
                    {friends.map((option, i) => {
                    return (

                      <Row>
                        <Col breakPoint={{ xs: 12, md:4}}>
                        <input
                          type="text"
                          name="option"
                          className="form-control mb-2"
                          placeholder="Name"
                          value={friends.friends}
                          onChange={e => handleInputChange(e, i)}
                        />
                        </Col>
                        <Col breakPoint={{ xs: 12, md:4}}>
                        <div className="form-check">
                          <input
                            className="form-control" name="is_email"
                            placeholder="Email address (optional)"
                            required
                            value={friends.is_email}
                            onChange={e => handleInputChange(e, i)}
                          ></input>
                        </div>
                      </Col>
                        <Col className="text-right" breakPoint={{ xs: 12, md:4}}>
                          {friends.length !== 1 && <button
                            className="w-25 form-control btn btn-danger mr-3"
                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                          {friends.length - 1 === i &&
                          <button className="w-25 form-control btn btn-primary mr-3" onClick={handleAddClick}>Add</button>}
                        </Col>
                      </Row>
                    );
                  })}
                  {/* {JSON.stringify(friends)} */}
                  </fieldset>
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
