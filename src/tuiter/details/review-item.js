import React, { useState, useEffect } from 'react';
import StarRating from '../rating/star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookBookmark,
  faHeart,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import * as userService from '../../services/auth-service';
import Avatar from '../avatar/avatar';

const ReviewItem = ({ review }) => {
  const { user_id, rating, time, text, likes, dislikes, bookmarks } = review;
  const [user, setUser] = useState(null);
  // console.log(userService.findUserById(user_id));

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await userService.findUserById(user_id);
        setUser(user);
      } catch (error) {
        console.error(`Error fetching user: ${error}`);
      }
    }
    fetchUser();
  }, [user_id]);

  const avatar = user ? user.picture : null;
  const username = user ? user.username : null;
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div className='review-avatar'>
      <div>
        <div className='review-item col-lg-6'>
          {/* <img
            src={`/images/${avatar}`}
            className='rounded-pill user-image me-2'
          /> */}
          <Avatar user={user} currentUser={currentUser} />
          <span>{username}</span>
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
