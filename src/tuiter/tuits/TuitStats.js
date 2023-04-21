import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faRetweet,
  faShare,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons'
import {updateTuitThunk} from "../../services/tuits-thunks";
import './index.css';

const TuitStats = (
  {
    post = {
      "_id": 123,
      "topic": "Space",
      "userName": "SpaceX",
      "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "time": "2h",
      "image": "tesla.jpg",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
  }
) => {
  const [tuit, setNewTuit] = useState(post)
  const dispatch = useDispatch();

  const updateLikesHandler = () => {
    const newTuit = {
      ...tuit,
      likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
      liked: !tuit.liked
    };
    setNewTuit(newTuit);
    dispatch(updateTuitThunk(newTuit));
  }

  const updateDislikeHandler = () => {
    const newTuit = {
      ...tuit,
      dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
      disliked: !tuit.disliked
    };
    setNewTuit(newTuit);
    dispatch(updateTuitThunk(newTuit));
  }

  return (
    <div className="row m-1 mt-3 mb-2">
      <div className="col text-secondary clickable"><FontAwesomeIcon icon={faComment}/><span
        className="ms-md-3">{tuit.replies}</span></div>
      <div className="col text-secondary clickable"><FontAwesomeIcon icon={faRetweet}/><span
        className="ms-md-3">{tuit.retuits}</span></div>
      <div className={`col clickable ${tuit.liked ? 'text-danger' : 'text-secondary'}`} onClick={updateLikesHandler}>
        <FontAwesomeIcon icon={faHeart}/><span className="ms-md-3">{tuit.likes}</span></div>
      <div className={`col clickable ${tuit.disliked ? 'text-danger' : 'text-secondary'}`} onClick={updateDislikeHandler}>
        <FontAwesomeIcon icon={faThumbsDown}/><span className="ms-md-3">{tuit.dislikes}</span></div>
      <div className="col text-secondary clickable"><FontAwesomeIcon icon={faShare}/><span
        className="ms-md-3"></span></div>
    </div>
  );
}

export default TuitStats;