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
      <div>
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <label>Roles:</label>
        <input
          type="radio"
          value="admin"
          checked={role === "admin"}
          onChange={handleRoleChange}
        />
        <label>Admin</label>
        <input
          type="radio"
          value="user"
          checked={role === "user"}
          onChange={handleRoleChange}
        />
        <label>User</label>
        <input
          type="radio"
          value="guest"
          checked={role === "guest"}
          onChange={handleRoleChange}
        />
        <label>Guest</label>
        <input
          type="radio"
          value="moderator"
          checked={role === "moderator"}
          onChange={handleRoleChange}
        />
        <label>Moderator</label>
      </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterScreen;