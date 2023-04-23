const SearchBar = () => {
    return (
         <div className="position-relative">
          <input placeholder="Search Tuiter"
            className="form-control rounded-pill ps-5"/>
          <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
        </div>
    );
}

export default SearchBar;