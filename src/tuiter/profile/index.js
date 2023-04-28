import './index.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import {
  profileThunk,
  logoutThunk,
  findUserByIdThunk,
} from '../../services/auth-thunks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  getUserFollowersThunk,
  getUserFollowingsThunk,
} from '../../services/follow-thunks';

function ProfileScreen() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [profile, setProfile] = useState({});
  const { user_id } = useParams(); // Get user_id from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  // const followers = useSelector(state => state.currentUser.currentUser.followers);
  // const followings = useSelector(state => state.currentUser.currentUser.followings);

  const followers = useSelector(
    state => state.currentUser.currentUser?.followers || [],
  );
  const followings = useSelector(
    state => state.currentUser.currentUser?.followings || [],
  );

  const [followersUsernames, setFollowersUsernames] = useState([]);
  const [followingsUsernames, setFollowingsUsernames] = useState([]);
  const [isFetchingProfile, setIsFetchingProfile] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsFetchingProfile(true);

      if (user_id && (!currentUser || currentUser._id !== user_id)) {
        const { payload } = await dispatch(profileThunk(user_id));
        setProfile(payload);
      } else {
        setProfile(currentUser);
      }

      setIsFetchingProfile(false);
    };

    fetchProfile();
  }, [dispatch, user_id]);

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserFollowersThunk(currentUser._id));
      dispatch(getUserFollowingsThunk(currentUser._id));
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    const fetchUsernames = async () => {
      const followersUsernamesPromises = followers.map(async userId => {
        const userAction = await dispatch(findUserByIdThunk(userId));
        const user = userAction.payload;
        return user.username;
      });
      const followingsUsernamesPromises = followings.map(async userId => {
        const userAction = await dispatch(findUserByIdThunk(userId));
        const user = userAction.payload;
        return user.username;
      });

      const fetchedFollowersUsernames = await Promise.all(
        followersUsernamesPromises,
      );
      const fetchedFollowingsUsernames = await Promise.all(
        followingsUsernamesPromises,
      );

      setFollowersUsernames(fetchedFollowersUsernames);
      setFollowingsUsernames(fetchedFollowingsUsernames);
    };

    if (followers.length > 0 || followings.length > 0) {
      fetchUsernames();
    }
  }, [followers, followings, dispatch]);

  if (!currentUser) {
    alert('you must login first');
    navigate('/login');
    return;
  }

  const renderFollowingList = () => {
    return (
      <ul>
        {followingsUsernames.map((username, index) => (
          <li key={followings[index]}>{username}</li>
        ))}
      </ul>
    );
  };

  const renderFollowersList = () => {
    return (
      <ul>
        {followersUsernames.map((username, index) => (
          <li key={followers[index]}>{username}</li>
        ))}
      </ul>
    );
  };

  const isCurrentUserProfile =
    !user_id ||
    (currentUser && currentUser._id === profile._id) ||
    isFetchingProfile;

  return (
    <div className='container'>
      <div className='list-group'>
        <div className='list-group-item'>
          <div className='row'>
            <div className='col-auto'>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className='fa-lg pt-3 clickable'
                onClick={() => navigate(-1)}
              />
            </div>
            <div className='col-10'>
              <h5 className='mb-0'>{`${profile.firstName} ${profile.lastName}`}</h5>
              <span className='text-secondary fa-sm'>{`${profile.email}`}</span>
            </div>
          </div>
        </div>

        <div className='list-group-item p-0'>
          <img className='img-fluid' src={`/images/starship.jpg`} />
        </div>

        <div className='user-top-part ps-4 pe-4 pb-4'>
          <div className='d-flex justify-content-between'>
            <div>
              <img
                className='user-img rounded-pill'
                src={
                  isCurrentUserProfile
                    ? currentUser.picture
                      ? `/images/${currentUser.picture}`
                      : '/images/default.png'
                    : profile.picture
                    ? `/images/${profile.picture}`
                    : '/images/default.png'
                }
              />
            </div>
            {isCurrentUserProfile && (
              <div>
                <button
                  className='btn rounded-pill border-secondary border-1 mt-2 position-relative top-50'
                  onClick={() => {
                    navigate('/tuiter/edit-profile');
                  }}
                >
                  Edit profile
                </button>
              </div>
            )}
          </div>

          <div className='mt-2'>
            <h3 className='fa-bold mb-0'>{`${profile.firstName} ${profile.lastName}`}</h3>
            {isCurrentUserProfile && (
              <span className='text-secondary fa-sm'>{profile.email}</span>
            )}
          </div>

          <div className='row'>
            <p>{profile.bio}</p>
          </div>

          <div className='d-flex justify-content-start text-secondary'>
            <div className='flex-box'>
              <i className='bi bi-geo-alt'></i>
              <span className='ms-1'>{profile.location}</span>
            </div>
            <div className='flex-box ms-3'>
              <i className='bi bi-balloon'></i>
              <span className='ms-1'>{`Born in ${profile.dob}`}</span>
            </div>
          </div>

          <div className='d-flex justify-content-start'>
            <div className='flex-box'>
              <button
                className='btn btn-link text-secondary'
                onClick={() => {
                  setShowFollowing(!showFollowing);
                  setShowFollowers(false);
                }}
              >
                Following
              </button>
            </div>
            <div className='flex-box ms-3'>
              <button
                className='btn btn-link text-secondary'
                onClick={() => {
                  setShowFollowers(!showFollowers);
                  setShowFollowing(false);
                }}
              >
                Followers
              </button>
            </div>
          </div>
          {showFollowing && (
            <div className='following-list'>{renderFollowingList()}</div>
          )}
          {showFollowers && (
            <div className='followers-list'>{renderFollowersList()}</div>
          )}
        </div>
        {isCurrentUserProfile && (
          <div>
            <button
              onClick={() => {
                dispatch(logoutThunk());
                navigate('/login');
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileScreen;
