import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUserThunk, unfollowUserThunk } from "../../services/follow-thunks";


const WhoToFollowListItem = ({ user }) => {
  const dispatch = useDispatch();
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
    if (!isFollowing) {
      console.log(currentUser);
      console.log(user);
      await dispatch(followUserThunk({ userId: currentUser._id, followUserId: user._id }));
      setIsFollowing(true);
    } else {
      console.log(currentUser);
      console.log(user);
      await dispatch(unfollowUserThunk({ userId: currentUser._id, followUserId: user._id }));
      setIsFollowing(false);
    }
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img className="rounded-circle" height={48} src={user.picture ? `/images/${user.picture}` : "/images/default.png"} />
        </div>
        <div className="col-8">
          <div className="fw-bold">{user.username}</div>
          <div>@{user.lastName}</div>
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