import { useState } from 'react';
import './searchresultstable.css';
import Paginate from '../Pagination/paginate';

const TableResults = ({posting }) => {

    const headers = [
      "Job_Title",
      "Job_Type",
      "Maximum_Salary_Range",
      "Advertise_To",
      "Advertise_From",
      "Category",
      "Department",
      "Location",
      "Job_Number",
    ];

    const [setNext, setSetNext] = useState(5);
    let pagesize = 5    

    return (
      <div className="tableContent">
        <table>
          <thead>
            {headers.map((header) => (
              <th>{header.split("_").join(" ")}</th>
            ))}
          </thead>
          <tbody>
            {posting.slice(setNext - pagesize, setNext).map((post, key) => (
              <tr key={key}>
                {headers.map((header) => (
                  <td>{post.properties[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Paginate data={posting} pagesize={5} nextSet={setSetNext} />
      </div>
    );
}

export default TableResults;
