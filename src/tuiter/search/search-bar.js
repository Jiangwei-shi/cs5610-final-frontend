import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchResults } from "../../actions/search-action";

const SearchBar = ({fetchResults}) => {
    const [keyword, setKeyword] = useState();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchKeyword = urlParams.get('keyword');
        if (searchKeyword) {
            setKeyword(decodeURIComponent(searchKeyword));
            fetchResults(searchKeyword);
        }
    }, []);

    const handleSearch = (keyword) => {
        fetchResults(keyword);
    };

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    return (
         <div className="position-relative">
          <input placeholder="Search Tuiter"
            className="form-control rounded-pill ps-5"
            value={keyword}
            onChange={handleInputChange}
        
 />
          <i className="bi bi-search position-absolute
                       wd-nudge-up clickable" onClick={() => handleSearch(keyword)}></i>
        </div>
    );
}

export default connect(null, { fetchResults })(SearchBar);