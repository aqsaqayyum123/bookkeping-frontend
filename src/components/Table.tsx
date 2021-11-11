import Link from 'next/link';
import { useState } from 'react';
// import QuestionBank from './QuestionBank';
import Group from './Group';
// import User from './User';
// import Question from './Question';

const index = ({ fileName, headings, records }) => {
  console.log("testingrecords",records);
  return (
    <>

      <table className="table">
        <thead>
          <tr>
            {headings.map((heading) => (
                <th className={heading == 'Action' ? 'text-right' : ''} scope="col">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {fileName == 'Group' && records.map((record) => (
                <Group record={record} />
            ))}
            {/* {fileName == 'QuestionBank' && records.map((record) => (
                <QuestionBank record={record} />
            ))}
            {fileName == 'Role' && records.map((record) => (
                <Role record={record} />
            ))}
            {fileName == 'User' && records.map((record) => (
                <User record={record} />
            ))}
            {fileName == 'Question' && records.map((record) => (
                <Question record={record} />
            ))} */}
        </tbody>
      </table>
    </>
  );
}
export default index;