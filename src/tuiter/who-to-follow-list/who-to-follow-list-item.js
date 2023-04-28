import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUserThunk, unfollowUserThunk } from "../../services/follow-thunks";
import { useNavigate } from 'react-router'


const WhoToFollowListItem = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.followings && currentUser.followings.includes(user._id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [currentUser, user]);

  const handleFollowClick = async () => {
    if (!currentUser) {
      alert("you must login first, then you can follow others");
      navigate("/login");
      return;
    }

    if (!isFollowing) {
      await dispatch(followUserThunk({ userId: currentUser._id, followUserId: user._id }));
      setIsFollowing(true);
    } else {
      await dispatch(unfollowUserThunk({ userId: currentUser._id, followUserId: user._id }));
      setIsFollowing(false);
    }
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img className="rounded-circle" height={45} src={user.picture ? `/images/${user.picture}` : "/images/default.png"} style={{ marginRight: "1rem" }} />
        </div>
        <div className="col-8">
          <div className="fw-bold">{user.username}</div>
          <div>@{user.username}</div>
        </div>
        <div className="col-2">
          <button
            className={`btn rounded-pill float-end ${isFollowing ? "btn-secondary" : "btn-primary"}`}
            onClick={handleFollowClick}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default WhoToFollowListItem;