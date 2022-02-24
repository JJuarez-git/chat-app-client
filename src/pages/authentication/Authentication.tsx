import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import React from "react";
import { signIn, logOut, signUp } from "../../api/auth";
import axios from "axios";
import { toast } from "react-toastify";

interface AuthContextType {
  user: User;
  signin: (email: string, password: string, callback: VoidFunction) => void;
  signup: (
    nickname: string,
    email: string,
    password: string,
    callback: VoidFunction
  ) => void;
  logout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export const Authentication = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User>(null!);
  const [loading, setLoading] = React.useState(true);
  const auth = getAuth();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("USER LOGGED!");
        setUser(user);
        setLoading(false);
      } else {
        console.log("USER NOT LOGGED");
        setUser(null!);
        setLoading(false);
      }
    });
  }, []);

  const signin = (email: string, password: string, callback: VoidFunction) => {
    return signIn(email, password, callback);
  };

  const signup = (
    username: string,
    email: string,
    password: string,
    callback: VoidFunction
  ) => {
    return signUp(username, email, password, callback);
  };

  const logout = (callback: VoidFunction) => {
    logOut(callback);
  };

  if (loading) {
    return null;
  }

  let value = { user, signin, signup, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
