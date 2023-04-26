import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchResults } from "../../actions/search-action";
import { useNavigate, useLocation } from 'react-router-dom';


const SearchBar = ({fetchResults}) => {
    const [keyword, setKeyword] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = () => {
        if (keyword && keyword.trim()) {
          fetchResults(keyword);
          const searchParams = new URLSearchParams();
          searchParams.set('keyword', keyword);
          navigate(`/tuiter/search?${searchParams.toString()}`);
        } else {
          fetchResults('');
          navigate(`/tuiter/search`);
        }
      };
      
      useState(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchKeyword = searchParams.get('keyword');
        if (searchKeyword) {
          setKeyword(decodeURIComponent(searchKeyword));
          fetchResults(searchKeyword);
        }
      });

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
                       wd-nudge-up clickable" onClick={handleSearch}></i>
        </div>
    );
}

export default connect(null, { fetchResults })(SearchBar);