import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/main/Dashboard";

// Guards
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";

function AppRoutes() {
  // 🔐 AUTH STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH ROUTES */}
        <Route
          path="/login"
          element={
            <GuestGuard isLoggedIn={isLoggedIn}>
              <Login setIsLoggedIn={setIsLoggedIn} />
            </GuestGuard>
          }
        />

        <Route
          path="/signup"
          element={
            <GuestGuard isLoggedIn={isLoggedIn}>
              <Signup />
            </GuestGuard>
          }
        />

        {/* MAIN ROUTES */}
        <Route
          path="/dashboard"
          element={
            <AuthGuard isLoggedIn={isLoggedIn}>
              <Dashboard />
            </AuthGuard>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;