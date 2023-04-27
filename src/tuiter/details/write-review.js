import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';

const WriteReview = () => {
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  const handleReviewTextChange = event => {
    setReviewText(event.target.value);
  };

  const handleSubmit = () => {
    const review = {
      rating,
      reviewText,
    };

    console.log(review);
  };

  return (
    <div>
      <div className='mb-3'>
        <Rating
          count={5}
          value={rating}
          onChange={handleRatingChange}
          size={30}
          activeColor='#ffd700'
        />
      </div>
      <div className='mb-3'>
        <textarea
          className='form-control'
          id='reviewText'
          rows='5'
          value={reviewText}
          onChange={handleReviewTextChange}
        ></textarea>
      </div>
      <div>
        <button className='btn btn-primary' onClick={handleSubmit}>
          Post Review
        </button>
      </div>
    </div>
  );
};

export default WriteReview;
