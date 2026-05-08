import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  setIsLoggedIn: (value: boolean) => void;
};

function Login({ setIsLoggedIn }: LoginProps) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setError("Email must include @");
      return false;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters");
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  const confirmLogin = () => {
    const ok = window.confirm("Are you sure you want to log in?");
    if (ok) handleLogin();
  };

  return (
    <div className="full-screen">

      <div className="card">

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login
        </h2>

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="error">{error}</div>}

        <button
          className="btn btn-primary"
          disabled={loading}
          onClick={confirmLogin}
        >
          {loading ? (
            <span style={{ display: "flex", justifyContent: "center" }}>
              <span className="spinner"></span>
              <span style={{ marginLeft: "8px" }}>Loading...</span>
            </span>
          ) : (
            "Login"
          )}
        </button>

      </div>
    </div>
  );
}

export default Login;