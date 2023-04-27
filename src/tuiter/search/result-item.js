// Component for showing result item.
import StarRating from '../rating/star-rating';
import { Navigate } from 'react-router-dom';

const ResultItem = ({ result }) => {
  console.log(result.image);

  const handleArrowClick = () => {
    return <Navigate to={`/detail/${result.id}`} />;
  };

  return (
    <div className='list-group-item bg-transparent'>
      <div className='row mt-2'>
        <div className='col-1 ms-1'>
          <img src={result.image_url} className='rounded-pill user-image' />
        </div>
        <div className='col ms-3'>
          <div className='d-flex justify-content-between'>
            <div className='flex-column'>
              <b className='me-2'>{result.name}</b>
              <div className='d-flex align-items-center'>
                <StarRating rating={result.rating} />
                <span
                  className='ms-2'
                  style={{ color: 'gray', fontSize: 'smaller' }}
                >
                  {result.review_count} yelp reviews
                </span>
              </div>
            </div>
            <i
              className='bi bi-arrow-right float-end clickable'
              onClick={handleArrowClick}
            ></i>
          </div>
          <div>{result.display_phone}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
