import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faX, faXmark} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfile = () => {
  const {user} = useSelector((state) => state.profile);
  const [profile, setProfile] = useState(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSaveButton = () => {
    dispatch(updateProfile(profile));
    navigate(-1);
  };

  return(
    <div className="container">
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-2"><FontAwesomeIcon icon={faXmark} className="fa-lg pt-2 clickable" onClick={() => navigate(-1)}/></div>
            <div className="col-10">
              <div className="row">
                <div className="col"><h5 className="mt-2 ms-2">Edit Profile</h5></div>
                <div className="col"><button className="btn btn-dark rounded-pill float-end" onClick={handleSaveButton}>Save</button></div>
              </div>

            </div>
          </div>
        </div>

        <div className="list-group-item p-0">
          <img className="img-fluid" src={`/images/${user.bannerPicture}`}/>
        </div>
        <div className="user-top-part ps-4 pe-4 pb-4">
          <div>
            <img className="user-img rounded-pill" src={`/images/${user.profilePicture}`}/>
          </div>
          <br/>


          <form className="form-floating">
            <input type="text" className="form-control"
                   placeholder="Joe" value={profile.firstName}
                   onChange={(e) => setProfile({...profile, firstName: e.target.value})}
            />
            <label>First Name</label>
          </form>
          <br/>

          <form className="form-floating">
            <input type="text" className="form-control"
                   placeholder="Doe" value={profile.lastName}
                   onChange={(e) => setProfile({...profile, lastName: e.target.value})}
            />
            <label>Last Name</label>
          </form>
          <br/>

          <form className="form-floating">
                        <textarea className="form-control"
                                  placeholder="Say something..." value={profile.bio} rows={8} cols={40}
                                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                        />
            <label>Bio</label>
          </form>
          <br/>

          <form className="form-floating">
            <input type="text" className="form-control"
                   placeholder="Boston, MA" value={profile.location}
                   onChange={(e) => setProfile({...profile, location: e.target.value})}
            />
            <label>Location</label>
          </form>
          <br/>

          <form className="form-floating">
            <input type="text" className="form-control"
                   placeholder="1/1/2000" value={profile.dateOfBirth}
                   onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
            />
            <label>Birth date</label>
          </form>
          <br/>

        </div>

      </div>
    </div>

  );
};

export default EditProfile;