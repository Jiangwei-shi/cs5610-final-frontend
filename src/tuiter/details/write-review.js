import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';
import reviewService from '../../services/review-service';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const WriteReview = props => {
  const { result_id } = useParams();
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  const handleReviewTextChange = event => {
    setReviewText(event.target.value);
  };

  const handleSubmit = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const review = {
      rating: rating,
      text: reviewText,
      user_id: currentUser._id,
      result_id: result_id,
    };

    reviewService
      .createReview(review)
      .then(response => {
        console.log(response);
        // Navigate to detail page for the item that was reviewed.
        // return <Navigate to={`/detail/${result_id}`} />;
      })
      .catch(error => {
        console.log('Error creating review:', error);
      });
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
        {/* <button className='btn btn-primary' onClick={handleSubmit}>
          Post Review
        </button> */}
        <Link
          to={`/detail/${result_id}`}
          className='btn btn-primary'
          onClick={handleSubmit}
        >
          Post Review
        </Link>
      </div>
    </div>
  );
};

export default WriteReview;
