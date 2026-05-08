import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  setIsLoggedIn: (value: boolean) => void;
};

function Login({ setIsLoggedIn }: LoginProps) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const confirmLogin = window.confirm("Are you sure you want to log in?");

    if (!confirmLogin) {
      navigate("/");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setIsLoggedIn(true); // ✅ FIX HERE
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Login;