import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import Dashboard from "../pages/main/Dashboard";
import Settings from "../pages/main/Settings";
import Profile from "../pages/main/Profile";

type Props = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

function AppRoutes({ isLoggedIn, setIsLoggedIn }: Props) {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROOT REDIRECT (IMPORTANT FIX) */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* AUTH */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<Signup />} />

        {/* MAIN (PROTECTED) */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/settings"
          element={
            isLoggedIn ? <Settings /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/profile"
          element={
            isLoggedIn ? <Profile /> : <Navigate to="/login" />
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;