import React from 'react';
import ReviewList from './review-list';
import ItemDetail from './yelp-detail';
import reviews from './reviews';
import item from './item';

const DetailScreen = () => {
  return (
    <div className='d-flex flex-column'>
      <div className='item-detail mb-3'>
        <ItemDetail item={item} />
      </div>
      <div className='write-a-review'>
        <button className='rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold'>
          Write a review
        </button>
      </div>
      <div className='review-list'>
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default DetailScreen;
