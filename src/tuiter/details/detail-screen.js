import React from 'react';
import ReviewItem from './review-item';
import review from './review.json';

const DetailScreen = () => {
  return <ReviewItem review={review} />;
};

export default DetailScreen;
