import './index.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router";


const ProfileComponent = () => {
  const {user} = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return(
    <div className="container">
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-auto"><FontAwesomeIcon icon={faArrowLeft} className="fa-lg pt-3 clickable" onClick={() => navigate(-1)}/></div>
            <div className="col-10">
              <h5 className="mb-0">{`${user.firstName} ${user.lastName}`}</h5>
              <span className="text-secondary fa-sm">{`${user.totalTweets} Tweets`}</span>
            </div>
          </div>
        </div>

        <div className="list-group-item p-0">
          <img className="img-fluid" src={`/images/${user.bannerPicture}`}/>
        </div>
        <div className="user-top-part ps-4 pe-4 pb-4">
          <div className="d-flex justify-content-between">
            <div>
              <img className="user-img rounded-pill" src={`/images/${user.profilePicture}`}/>
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
            <h3 className="fa-bold mb-0">{`${user.firstName} ${user.lastName}`}</h3>
            <span className="text-secondary fa-sm">{user.handle}</span>
          </div>

          <div className="row">
            <p>{user.bio}</p>
          </div>

          <div className="d-flex justify-content-start text-secondary">
            <div className="flex-box"><i className="bi bi-geo-alt"></i><span className="ms-1">{user.location}</span></div>
            <div className="flex-box ms-3"><i className="bi bi-balloon"></i><span className="ms-1">{`Born in ${user.dateOfBirth}`}</span></div>
            <div className="flex-box ms-3"><i className="bi bi-calendar3"></i><span className="ms-1">{`Joined ${user.dateJoined}`}</span></div>
          </div>

          <div className="d-flex justify-content-start">
            <div className="flex-box">
              <span className="fw-bold">{user.followingCount}</span>
              <span className="text-secondary"> Following</span>
            </div>
            <div className="flex-box ms-3">
              <span className="fw-bold">{user.followersCount}</span>
              <span className="text-secondary"> Followers</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default ProfileComponent;