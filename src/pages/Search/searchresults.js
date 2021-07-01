import './searchresults.css';
import moment from 'moment';
import { FaLinkedinIn, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { HiMail } from 'react-icons/hi';

const SearchResults = ({ posting }) => {
    return (
      <div className="searchResults">
        <h1>{posting.Job_Title}</h1>
        <p>{posting.Location}</p>
        <p>
          {posting.Job_Type} - ${posting.Maximum_Salary_Range}
        </p>
        <p>Category: {posting.Category}</p>
        <p>Department: {posting.Department}</p>
        {posting.Job_Description}{" "}
        <div style={{ marginTop: 10 }}>
          <span>
            {" "}
            <FaLinkedinIn /> <FaTwitter /> <FaFacebookSquare /> <HiMail />
          </span>
          <span>
            Posted more than {moment(posting.Advertise_From).fromNow()} | Closes{" "}
            {moment(posting.Advertise_To).fromNow()}
          </span>
        </div>
      </div>
    );
}


export default SearchResults;