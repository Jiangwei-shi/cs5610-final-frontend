// Component for showing result item.
import StarRating from "./star-rating";


const ResultItem = ({result}) => {
    console.log(result.image);

    return (
        <div className="list-group-item bg-transparent">
      <div className="row mt-2">
        <div className="col-1 ms-1">
          <img src={`/images/${result.image}`} className="rounded-pill user-image"/>
        </div>
        <div className="col ms-3">
          <div className="d-flex justify-content-between">
            <div className="flex-column">
              <b className="me-2">{result.name}</b>
              <div className="d-flex align-items-center">
                <StarRating rating={result.rating}/>
                <span className='ms-2' style={{color: 'gray', fontSize: 'smaller'}}>{result.reviews} reviews</span>
              </div>
            </div>
            <i className="bi bi-arrow-right float-end clickable"
               onClick={() => console.log(test)}></i>
          </div>
          <div>test</div>
        </div>
      </div>
    </div>
  );
}

export default ResultItem;