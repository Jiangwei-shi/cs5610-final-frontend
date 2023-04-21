import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./TuitStats";
import './index.css';
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
  {
    post = {
      "_id": 123,
      "topic": "Space",
      "username": "SpaceX",
      "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "time": "2h",
      "image": "tesla",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
  }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return(
    <div className="list-group-item bg-transparent">
      <div className="row mt-2">
        <div className="col-1 ms-1">
          <img src={`/images/${post.image}`} className="rounded-pill user-image"/>
        </div>
        <div className="col ms-3">
          <div className="d-flex justify-content-between">
            <div className="flex-column">
              <b>{post.username}</b><FontAwesomeIcon icon={faCheckCircle} className="ms-1 me-2 text-primary"/>
              <span className="text-dark">@ {post.topic} · {post.time}</span>
            </div>
            <i className="bi bi-x-lg float-end clickable"
               onClick={() => deleteTuitHandler(post._id)}></i>
          </div>
          <div>{post.tuit}</div>
          <TuitStats key={post._id} post={post}/>
        </div>
      </div>
    </div>
  );
};
export default TuitItem;