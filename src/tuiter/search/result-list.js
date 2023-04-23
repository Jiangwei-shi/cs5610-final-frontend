import ResultItem from "./result-item";
import results from "./results";

const ResultList = () => {
    const loading = false;
    
    return(
        <ul className="list-group">
          {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
          }
          {
            results.map((result) => <ResultItem key={result._id} result={result}/>)
          }
        </ul>
      );
}

export default ResultList