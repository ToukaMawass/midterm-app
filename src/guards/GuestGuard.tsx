import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
type GuardProps = {
  isLoggedIn: boolean;
  children: ReactNode;
};

function GuestGuard({ isLoggedIn, children }: GuardProps) {
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}

export default GuestGuard;