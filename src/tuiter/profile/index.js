import './index.css';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk } from "../../services/auth-thunks";
import { setProfileUpdated } from "../reducers/auth-reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function ProfileScreen() {
  const { currentUser, profileUpdated } = useSelector((state) => state.currentUser);
  const localUser = JSON.parse(localStorage.getItem("currentUser"));
  const [profile, setProfile] = useState(currentUser || localUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateLocalStorage = (currentUser) => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  useEffect(() => {
    if (currentUser) {
      updateLocalStorage(currentUser);
      setProfile(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchProfile = async () => {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    };
    if (profileUpdated) {
      fetchProfile();
      dispatch(setProfileUpdated(false));
    }
  }, [dispatch, currentUser, profileUpdated]);

  if (!currentUser) {
    return <div>你无权查看此页面，请先登录</div>;
  }

  return (
    <div className="container">
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-auto"><FontAwesomeIcon icon={faArrowLeft} className="fa-lg pt-3 clickable" onClick={() => navigate(-1)}/></div>
            <div className="col-10">
              <h5 className="mb-0">{`${profile.firstName} ${profile.lastName}`}</h5>
              <span className="text-secondary fa-sm">{`${profile.email}`}</span>
            </div>
          </div>
        </div>

        <div className="list-group-item p-0">
          <img className="img-fluid" src={`/images/starship.jpg`}/>
        </div>
        <div className="user-top-part ps-4 pe-4 pb-4">
          <div className="d-flex justify-content-between">
            <div>
              <img className="user-img rounded-pill" src={`/images/Elon_Mask.png`}/>
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
            <h3 className="fa-bold mb-0">{`${profile.firstName} ${profile.lastName}`}</h3>
            <span className="text-secondary fa-sm">{profile.email}</span>
          </div>

          <div className="row">
            <p>{profile.bio}</p>
          </div>

          <div className="d-flex justify-content-start text-secondary">
            <div className="flex-box"><i className="bi bi-geo-alt"></i><span className="ms-1">{profile.location}</span></div>
            <div className="flex-box ms-3"><i className="bi bi-balloon"></i><span className="ms-1">{`Born in ${profile.dob}`}</span></div>
            {/*<div className="flex-box ms-3"><i className="bi bi-calendar3"></i><span className="ms-1">{`Joined ${profile.createdAt}`}</span></div>*/}
          </div>

          <div className="d-flex justify-content-start">
            <div className="flex-box">
              {/*<span className="fw-bold">{user.followingCount}</span>*/}
              <span className="text-secondary"> Following</span>
            </div>
            <div className="flex-box ms-3">
              {/*<span className="fw-bold">{user.followersCount}</span>*/}
              <span className="text-secondary"> Followers</span>
            </div>
          </div>
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

