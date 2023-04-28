import './index.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { profileThunk, logoutThunk } from '../../services/auth-thunks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ProfileScreen() {
  // const { currentUser } = useSelector(state => state.currentUser);
  // const localUser = JSON.parse(localStorage.getItem('currentUser'));
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [profile, setProfile] = useState({});
  const { user_id } = useParams(); // Get user_id from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  if (!currentUser) {
    return <div>你无权查看此页面，请先登录</div>;
  }

  console.log(currentUser._id);
  console.log('profile._id' + profile._id);
  const isCurrentUserProfile =
    !user_id ||
    (currentUser && currentUser._id === profile._id) ||
    isFetchingProfile;

  console.log(isCurrentUserProfile);

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
              {/* <img
                className='user-img rounded-pill'
                src={
                  currentUser
                    ? `/images/${currentUser.picture}`
                    : '/images/default.png'
                }
              /> */}
              {/* <img
                className='user-img rounded-pill'
                src={
                  isCurrentUserProfile
                    ? `/images/${currentUser.picture}`
                    : `/images/${profile.picture}`
                }
              /> */}
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
            {/*<div className="flex-box ms-3"><i className="bi bi-calendar3"></i><span className="ms-1">{`Joined ${profile.createdAt}`}</span></div>*/}
          </div>

          <div className='d-flex justify-content-start'>
            <div className='flex-box'>
              {/*<span className="fw-bold">{user.followingCount}</span>*/}
              <span className='text-secondary'> Following</span>
            </div>
            <div className='flex-box ms-3'>
              {/*<span className="fw-bold">{user.followersCount}</span>*/}
              <span className='text-secondary'> Followers</span>
            </div>
          </div>
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
