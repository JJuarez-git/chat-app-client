import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/authentication/Authentication";
import { RoutePath } from "../../pages/loader/RoutesLoader";

const LogOut = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  
  const handleLogOut = () => {
    auth.logout(() => {
      navigate(RoutePath.SingIn, { replace: true });
    });
  };

  return (
    <button
      className="inline-flex bg-red-500 p-2 px-4 rounded-full text-white shadow-md"
      onClick={handleLogOut}
    >
      LogOut
    </button>
  );
};

export default LogOut
