import React from "react";
import { useAuth } from '../pages/authentication/Authentication';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../pages/loader/RoutesLoader';

const ThemeMode = (props: any) => {
  const { handleMode, mode } = props;
  const navigate = useNavigate()
  const auth = useAuth()

  const handleClick = (theme: string) => {
    handleMode(theme);
  };

  const handleLogOut = () => {
    auth.logout(() => {
      navigate(RoutePath.SingIn, {replace: true})
    })
  }

  return (
    <>
      <button
        className="inline-flex bg-red-500 p-2 px-4 rounded-full text-white shadow-md"
        onClick={() => handleClick("dark")}
      >
        <span className="material-icons">dark_mode</span>
      </button>
      <button
        className="inline-flex bg-red-500 p-2 px-4 rounded-full text-white shadow-md"
        onClick={() => handleClick("light")}
      >
        <span className="material-icons">light_mode</span>
      </button>
      <button
        className="inline-flex bg-red-500 p-2 px-4 rounded-full text-white shadow-md"
        onClick={handleLogOut}
      >
        LogOut
      </button>
      <p>Current: {mode}</p>
    </>
  );
};

export default ThemeMode;
