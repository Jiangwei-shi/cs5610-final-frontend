import React from 'react';
import StarRating from '../rating/star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookBookmark,
  faHeart,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';

const ReviewItem = ({ review }) => {
  console.log(review);
  const { user, rating, time, text, likes, dislikes, bookmarks } = review;
  const avatar = user.avatar;

  return (
    <div className='review-avatar'>
      <div>
        <div className='review-item col-lg-6'>
          <img src={avatar} className='rounded-pill user-image me-2' />
          <span>{user.name}</span>
        </div>
        <div className='review-rating'>
          <StarRating rating={rating} />
          <span className='review-time' style={{ color: 'gray' }}>
            {time}
          </span>
        </div>
        <div className='review-text'>{text}</div>
        <div className='review-actions'>
          <div className='row m-1 mt-3 mb-2'>
            <div className='col'>
              <FontAwesomeIcon icon={faHeart} />
              <span className='ms-md-3'>2</span>
            </div>
            <div className='col'>
              <FontAwesomeIcon icon={faThumbsDown} />
              <span className='ms-md-3'>4</span>
            </div>
            <div className='col'>
              <FontAwesomeIcon icon={faBookBookmark} />
              <span className='ms-md-3'>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
