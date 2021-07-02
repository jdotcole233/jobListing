import { useState, useEffect, Fragment } from "react";
import './main.css';
import Nav from './Nav/nav'
import Raleigh from '../assets/images/Raleigh.png';
import { SearchBar, SearchResults, TableResults } from "./Search/index";
import results from '../data/data';
import Paginate from "./Pagination/paginate";

const Main = () => {
    const features = results.results.features;
    const [filter, setFilter] = useState([])
    const [parentSearchTerm, setParentSearchTerm] = useState('');
    const [viewState, setViewState] = useState(true);

    const [setNext, setSetNext] = useState(5);
    let pagesize = 5;    

    useEffect(() => {
        const result = parentSearchTerm
          ? features.filter((list) =>
              list.properties.Job_Title.toLowerCase().includes(
                parentSearchTerm.toLowerCase()
              )
            )
          : features;
        setFilter(result);
    }, [parentSearchTerm, features]);



    return (
      <div className="mainContent">
        <Nav />
        <div className="imageContent">
          <img src={Raleigh} height={200} alt="Company information" />
        </div>
        <div className="searchContents">
          <SearchBar
            setParentSearchTerm={setParentSearchTerm}
            jobListingSize={filter.length}
            switchView={setViewState}
          />
          {viewState ? (
            <Fragment>
              {
                filter.slice(setNext - pagesize, setNext).map((posting, key) => (
                  <SearchResults key={key} posting={posting.properties} />
                ))
              }
              <Paginate
                data={filter}
                pagesize={pagesize}
                nextSet={setSetNext}
              />
            </Fragment>
          ) : (
            <TableResults posting={filter} />
          )}
        </div>
      </div>
    );
}



export default Main;