import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const API = "http://127.0.0.1:5000";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      const res = await axios.post(`${API}/api/register`, { email, password });
      setMsg(res.data.message);
    } catch {
      setMsg("User already exists");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API}/api/login`, { email, password });
      if (res.data.message) navigate("/portfolio");
      else setMsg(res.data.error);
    } catch {
      setMsg("Login failed");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1>Welcome Back 👋</h1>
        <p className="subtitle">Login to continue</p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn primary" onClick={login}>
          Login
        </button>

        <button className="btn secondary" onClick={register}>
          Register
        </button>

        <p className="msg">{msg}</p>
      </div>
    </div>
  );
}
