import './index.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  profileThunk,
  logoutThunk,
  findUserByIdThunk,
} from '../../services/auth-thunks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  getUserFollowersThunk,
  getUserFollowingsThunk,
} from '../../services/follow-thunks'

function ProfileScreen() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const followers = useSelector(state => state.currentUser.currentUser.followers);
  const followings = useSelector(state => state.currentUser.currentUser.followings);
  const [followersUsernames, setFollowersUsernames] = useState([]);
  const [followingsUsernames, setFollowingsUsernames] = useState([]);

  useEffect(() => {
    dispatch(profileThunk());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserFollowersThunk(currentUser._id));
      dispatch(getUserFollowingsThunk(currentUser._id));
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    const fetchUsernames = async () => {
      const followersUsernamesPromises = followers.map(async (userId) => {
        const userAction = await dispatch(findUserByIdThunk(userId));
        const user = userAction.payload;
        return user.username;
      });
      const followingsUsernamesPromises = followings.map(async (userId) => {
        const userAction = await dispatch(findUserByIdThunk(userId));
        const user = userAction.payload;
        return user.username;
      });

      const fetchedFollowersUsernames = await Promise.all(followersUsernamesPromises);
      const fetchedFollowingsUsernames = await Promise.all(followingsUsernamesPromises);

      setFollowersUsernames(fetchedFollowersUsernames);
      setFollowingsUsernames(fetchedFollowingsUsernames);
    };

    if (followers.length > 0 || followings.length > 0) {
      fetchUsernames();
    }
  }, [followers, followings, dispatch]);

  if (!currentUser) {
    return <div>你无权查看此页面，请先登录</div>;
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

  return (
    <div className="container">
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-auto"><FontAwesomeIcon icon={faArrowLeft} className="fa-lg pt-3 clickable" onClick={() => navigate(-1)}/></div>
            <div className="col-10">
              <h5 className="mb-0">{`${currentUser.firstName} ${currentUser.lastName}`}</h5>
            </div>
          </div>
        </div>

        <div className="list-group-item p-0">
          <img className="img-fluid" src={`/images/starship.jpg`}/>
        </div>
        <div className="user-top-part ps-4 pe-4 pb-4">
          <div className="d-flex justify-content-between">
            <div>
              <img className="user-img rounded-pill" src={currentUser.picture ? `/images/${currentUser.picture}` : "/images/anonymous.png"}/>
            </div>
            <div>
              <button
                className="btn rounded-pill border-secondary border-1 mt-2 position-relative top-50"
                onClick={() => {
                  navigate('/tuiter/edit-profile');
                }}
              >Edit profile</button>
            </div>
          </div>

          <div className="mt-2">
            <h3 className="fa-bold mb-0">{`${currentUser.firstName} ${currentUser.lastName}`}</h3>
          </div>

          <div className="row">
            <p>{currentUser.bio}</p>
          </div>

          <div className="d-flex justify-content-start text-secondary">
            <div className="flex-box"><i className="bi bi-geo-alt"></i><span className="ms-1">{currentUser.location}</span></div>
            <div className="flex-box ms-3"><i className="bi bi-balloon"></i><span className="ms-1">{`Born in ${currentUser.dob}`}</span></div>
          </div>

          <div className="d-flex justify-content-start">
            <div className="flex-box">
              <button className="btn btn-link text-secondary" onClick={() => { setShowFollowing(!showFollowing); setShowFollowers(false); }}>Following</button>
            </div>
            <div className="flex-box ms-3">
              <button className="btn btn-link text-secondary" onClick={() => { setShowFollowers(!showFollowers); setShowFollowing(false); }}>Followers</button>
            </div>
          </div>
          {showFollowing && (
            <div className="following-list">
              {renderFollowingList()}
            </div>
          )}
          {showFollowers && (
            <div className="followers-list">
              {renderFollowersList()}
            </div>
          )}
        </div>
        <button
          onClick={() => {
            dispatch(logoutThunk());
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileScreen;

