import ResultItem from "./result-item";
import { connect } from 'react-redux';

const ResultList = ({ loading, results}) => {  
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

const mapStateToProps = (state) => ({
    loading: state.results.loading,
    results: state.results.results
});

export default connect(mapStateToProps)(ResultList);