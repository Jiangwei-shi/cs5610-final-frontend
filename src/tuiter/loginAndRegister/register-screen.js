import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from '../../services/auth-thunks'

function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    if (!username || !password || !role) {
      alert("Please fill out all fields");
      return;
    }
    try {
      await dispatch(registerThunk({ username, password, role }));
      navigate("/login");
    } catch (e) {
      alert(e);
    }
  };

  const handleRoleChange = (event) => {
    const role = event.target.value;
    setRole(role);
  };


  return (
    <div>
      <h1>Register Screen</h1>

      <div className="form-floating mb-3">
        <input
          className="form-control "
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
        />
        <label form="floatingInput">Username</label>
      </div>

      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Username"
        />
        <label form="floatingPassword">Password</label>
      </div>

      <div className="mb-3">
        <label className="col-form-label">Roles:</label>
        <div className="d-flex">
          <div className="form-check me-2">
            <input
              className="form-check-input"
              type="radio"
              value="admin"
              checked={role === "admin"}
              onChange={handleRoleChange}
            />
            <label className="form-check-label">Admin</label>
          </div>
          <div className="form-check me-2">
            <input
              className="form-check-input"
              type="radio"
              value="user"
              checked={role === "user"}
              onChange={handleRoleChange}
            />
            <label className="form-check-label">User</label>
          </div>
          <div className="form-check me-2">
            <input
              className="form-check-input"
              type="radio"
              value="guest"
              checked={role === "guest"}
              onChange={handleRoleChange}
            />
            <label className="form-check-label">Guest</label>
          </div>
          <div className="form-check me-2">
            <input
              className="form-check-input"
              type="radio"
              value="moderator"
              checked={role === "moderator"}
              onChange={handleRoleChange}
            />
            <label className="form-check-label">Moderator</label>
          </div>
        </div>
      </div>


      <button onClick={handleRegister} className={"btn btn-outline-primary"}>Register</button>
    </div>
  );
}

export default RegisterScreen;