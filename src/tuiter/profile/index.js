import './index.css';
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { profileThunk, logoutThunk } from "../../services/auth-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function ProfileScreen() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentUser);

    dispatch(profileThunk());
  }, [dispatch]);

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
              <span className="text-secondary"> Following</span>
            </div>
            <div className="flex-box ms-3">
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

