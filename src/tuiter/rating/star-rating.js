import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {

  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = rating - fullStars - halfStars;


  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} size={'xs'}/>)
  }

  for (let i = 0; i < halfStars; i++) {
    stars.push(<FontAwesomeIcon icon={faStarHalf} size={'xs'}/>)
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FontAwesomeIcon icon={farStar} size={'xs'} />)
  }

  return <div>{stars}</div>;
};

export default StarRating;
