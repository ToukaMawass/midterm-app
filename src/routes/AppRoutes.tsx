import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// AUTH PAGES
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// MAIN PAGES
import Dashboard from "../pages/main/Dashboard";
import Profile from "../pages/main/Profile";
import Settings from "../pages/main/Settings";

// GUARDS
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";

// LAYOUTS
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        {/* 🔥 DEFAULT ROUTE → REDIRECT TO LOGIN */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 🔐 AUTH ROUTES */}
        <Route
          path="/login"
          element={
            <GuestGuard isLoggedIn={isLoggedIn}>
              <AuthLayout>
                <Login setIsLoggedIn={setIsLoggedIn} />
              </AuthLayout>
            </GuestGuard>
          }
        />

        <Route
          path="/signup"
          element={
            <GuestGuard isLoggedIn={isLoggedIn}>
              <AuthLayout>
                <Signup />
              </AuthLayout>
            </GuestGuard>
          }
        />

        {/* 🏠 MAIN ROUTES */}
        <Route
          path="/dashboard"
          element={
            <AuthGuard isLoggedIn={isLoggedIn}>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </AuthGuard>
          }
        />

        <Route
          path="/profile"
          element={
            <AuthGuard isLoggedIn={isLoggedIn}>
              <MainLayout>
                <Profile />
              </MainLayout>
            </AuthGuard>
          }
        />

        <Route
          path="/settings"
          element={
            <AuthGuard isLoggedIn={isLoggedIn}>
              <MainLayout>
                <Settings />
              </MainLayout>
            </AuthGuard>
          }
        />

        {/* 🚫 CATCH ALL (optional but good practice) */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;