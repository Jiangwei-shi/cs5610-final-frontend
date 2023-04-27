import React from 'react';
import ReviewItem from './review-item';

const ReviewList = ({ reviews }) => {
  return (
    <div className='container'>
      <div className='col'>
        {reviews.map(review => (
          <div className='col-md-6 mb-4' key={review.id}>
            <ReviewItem review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
