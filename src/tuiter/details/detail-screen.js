import React from 'react';
import ReviewList from './review-list';
import reviews from './reviews';

const DetailScreen = () => {
  return <ReviewList reviews={reviews} />;
};

export default DetailScreen;
