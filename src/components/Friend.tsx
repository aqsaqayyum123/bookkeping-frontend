import Link from 'next/link';
import { server } from '../../config/index';
import Router from 'next/router';
export default function index({ record }) {

  return (
    <>
      <tr>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td>{record.createdAt}</td>
      </tr>
    </>
  );
}
