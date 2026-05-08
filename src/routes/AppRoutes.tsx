import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/main/Dashboard";

// Guards
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";

// Layouts
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH ROUTES */}
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

        {/* MAIN ROUTES */}
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

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;