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
      navigate("/login");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setIsLoggedIn(true);
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      {/* LOGIN CARD */}
      <div className="w-[340px] bg-white p-8 rounded-xl shadow-md">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        {/* INPUTS */}
        <div className="flex flex-col gap-3 mb-5">
          <input
            type="text"
            placeholder="Username"
            className="border rounded px-3 py-2 outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* BUTTON / LOADING */}
        {loading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500">Logging in...</p>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        )}

      </div>

    </div>
  );
}

export default Login;