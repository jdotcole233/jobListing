import { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineCaretDown } from "react-icons/ai";
import {FaSortAmountDown} from 'react-icons/fa';
import { RiFilter2Line } from "react-icons/ri";
import { ImList } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";


import './searchbar.css';

const SearchBar = ({ setParentSearchTerm, jobListingSize, switchView }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleListing, setToggleListing] = useState(true);

  useEffect(() => {
    setParentSearchTerm(searchTerm);
  }, [searchTerm, setParentSearchTerm]);

  const toggleViews = (st) => {
    console.log(st);
    setToggleListing(st);
    switchView(st);
  };
  return (
    <div className="searchbar">
      <div className="searchbarcontent">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <AiOutlineSearch size={30} />
      </div>
      <div className="searchUtil">
        <span> {jobListingSize} Jobs</span>
        <span
          onClick={() => toggleViews(true)}
          className={toggleListing ? "active" : ""}
          title="Gid View"
        >
          <GiHamburgerMenu size={25} />
        </span>
        <span
          onClick={() => toggleViews(false)}
          className={toggleListing ? "" : "active"}
          title="List View"
        >
          <ImList size={25} />
        </span>
        <span>
          <FaSortAmountDown size={25} />
          Sort
          <AiOutlineCaretDown />
        </span>
        <span>
          <RiFilter2Line size={25} />
          Filter
          <AiOutlineCaretDown />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;