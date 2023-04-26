import ResultList from "./result-list";
import SearchBar from "./search-bar";
import "./search.css";

const SearchScreen = () => {
    return (
        <>
        <div className="mb-3">
            <SearchBar />
        </div>
        <div>
            <ResultList />
        </div>
        </>
    );
}

export default SearchScreen;