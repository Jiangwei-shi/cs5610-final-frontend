import { useState } from "react";
import { searchYelp } from "../../services/search-service";
import { connect } from 'react-redux';
import { fetchResults } from "../../actions/search-action";

const SearchBar = ({fetchResults}) => {
    const [keyword, setKeyword] = useState();

    const handleSearch = (keyword) => {
        // searchYelp(keyword)
        // .then((data) => {
        //     console.log(data);
        //     // Handle the data here
        // })
        // .catch((error) => {
        //     console.error(error);
        //     // Handle the error here
        // });

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