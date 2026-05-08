import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type GuardProps = {
  isLoggedIn: boolean;
  children: ReactNode;
};

function AuthGuard({ isLoggedIn, children }: GuardProps) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default AuthGuard;