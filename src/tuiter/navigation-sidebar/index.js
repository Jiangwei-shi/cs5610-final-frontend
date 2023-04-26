import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH,
  faTag,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
    <div className="list-group">
      {/*<a className="list-group-item">Tuiter</a>*/}
      <Link to="/tuiter/tuiter" className={`list-group-item ${active === 'tuiter'?'active':''}`}>
        <div className="row">
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col">tuiter</div>
        </div>
      </Link>
      <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
        <div className="row">
          <div className="col-1"><FontAwesomeIcon icon={faHome} size={"lg"}/></div>
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Home</div>
        </div>
      </Link>
      <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
        <div className="row">
          <div className="col-1"><FontAwesomeIcon icon={faHashtag} size={"lg"}/></div>
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Explore</div>
        </div>
      </Link>
      <a className={`list-group-item
                    ${active === 'lab' ? 'active' : ''}`}>
        <div className="row">
          <div className="col-1"><FontAwesomeIcon icon={faTag} size={"lg"}/></div>
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Labs</div>
        </div>
      </a>
      <Link to="/tuiter/search" className={`list-group-item
                    ${active === 'search'?'active':''}`}>
        <div className="row">
          <div className="col-1"><FontAwesomeIcon icon={faMagnifyingGlass} size={"lg"}/></div>
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Search</div>
        </div>
      </Link>
      <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
        <div className="row">
          <div className="col-1"><FontAwesomeIcon icon={faEnvelope} size={"lg"}/></div>
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Messages</div>
        </div>
      </a>
      <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
        <div className="row">
          <div className="col-1"><FontAwesomeIcon icon={faBookmark} size={"lg"}/></div>
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Bookmarks</div>
        </div>
      </a>
      <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
        <div className="row">
          <div className="col-1"><FontAwesomeIcon icon={faList} size={"lg"}/></div>
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Lists</div>
        </div>
      </a>
      <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
        <div className="row">
          <div className="col-1"><FontAwesomeIcon icon={faUser} size={"lg"}/></div>
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Profile</div>
        </div>
      </Link>
      <Link to="/tuiter/login" className={`list-group-item ${active === 'login'?'active':''}`}>
        <div className="row">
          <div className="col-1"><FontAwesomeIcon icon={faUser} size={"lg"}/></div>
          <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">login</div>
        </div>
      </Link>

    </div>
  );
};
export default NavigationSidebar;

