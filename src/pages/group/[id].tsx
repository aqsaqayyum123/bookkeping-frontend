import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import { useState } from 'react';
import { server } from '../../../config/index';

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
const update = ({recordId}) => {
  // const [question, setQuestion] = useState(questionRecord.question);
  // const [description, setDescription] = useState(questionRecord.description);
  // const [marks, setMarks] = useState(questionRecord.marks);
  // const [questionBankId, setQuestionBankId] = useState(questionRecord.question_bank_id);
  // const [tags, setTags] = useState([questionRecord.tags]);
  // const [options, setOptions] = useState(questionRecord.options.length ?questionRecord.options : [{ text: "", is_correct: false }]);

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
        options:options,
        id: questionRecord.id,
      });
      setQuestion('');
      setDescription('');
      setMarks('');
      setTags([]);
      setQuestionBankId('');
      setOptions([{ text: "", is_correct: false }]);
    } catch (error) {
      console.log(error);
    }
  }

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
               Update Group
              </header>
              <CardBody>
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
                      Update Group
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

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/group/groupList`);
  const groups = await res.json();
  console.log(groups);

  const paths = groups.group.map((group) => ({
    params: { id: group.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recordId = params.id;
  return { props: {
    recordId
   }};
}

export default update;
