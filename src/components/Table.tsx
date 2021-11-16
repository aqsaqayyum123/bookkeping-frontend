import Link from 'next/link';
import { useState } from 'react';
import Group from './Group';
import Friend from './Friend';
import Expense from './Expense';


const index = ({ fileName, headings, records }) => {
  //console.log("testingrecords",records.group);
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
            {fileName == 'Group' && records.group.map((record) => (
                <Group record={record} />
            ))}
            {fileName == 'Friend' && records.friend.map((record) => (
                <Friend record={record} />
            ))}
             {fileName == 'Expense' && records.expense.map((record) => (
                <Expense record={record} />
            ))}

        </tbody>
      </table>
    </>
  );
}
export default index;