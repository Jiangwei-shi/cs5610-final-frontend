import React from "react";
import PostSummaryItem
  from "./post-summary-item";
import {useSelector} from "react-redux";
const PostSummaryList = () => {
  // const postsArray = useSelector(state => state.tuits)
  const {tuits, loading} = useSelector(state => state.tuitsData)
  return(
    <ul className="list-group">
      {
        loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }
      {
        tuits.map(post =>
          <PostSummaryItem
            key={post._id} post={post}/>)
      }
    </ul>
  );
};
export default PostSummaryList;

