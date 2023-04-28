import React from 'react';
import { Link } from 'react-router-dom';

const Avatar = ({ user, currentUser, size = 'default' }) => {
  if (!user) {
    return null; // Return null if user is not available.
  }

  const avatarSize = size === 'small' ? 'user-image-sm' : 'user-image';
  const profilePath =
    currentUser && currentUser._id === user._id
      ? '/profile'
      : `/profile/${user._id}`;

  return (
    <Link to={profilePath}>
      <img
        src={`/images/${user.picture}`}
        className={`rounded-pill ${avatarSize} me-2`}
      />
    </Link>
  );
};

export default Avatar;
