// import React from "react";
// import WhoToFollowListItem
//   from "./who-to-follow-list-item";
// import {useSelector} from "react-redux";
//
// const WhoToFollowList = () => {
//   const whoArray = useSelector(
//     (state) => state.who);
//   return(
//     <ul className="list-group">
//       <li className="list-group-item">
//         <h3>Who to follow</h3>
//       </li>
//       {
//         whoArray.map(who =>
//           <WhoToFollowListItem
//             key={who._id}
//             who={who}/>
//         )
//       }
//     </ul>
//   );
// };
//
// export default WhoToFollowList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WhoToFollowListItem from './who-to-follow-list-item';
import { findAllUsersThunk } from '../../services/auth-thunks';

const WhoToFollowList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(state => state.users);

  // console.log(users);

  useEffect(() => {
    dispatch(findAllUsersThunk());
  }, [dispatch]);

  return (
    <ul className='list-group'>
      <li className='list-group-item'>
        <h3>Who to follow</h3>
      </li>
      {loading && <li className='list-group-item'>Loading...</li>}
      {(users || []).map(user => (
        <WhoToFollowListItem key={user._id} user={user} />
      ))}
    </ul>
  );
};

export default WhoToFollowList;
