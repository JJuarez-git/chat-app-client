import React from "react";
import { useAuth } from "./Authentication";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useNavigate } from 'react-router-dom';
import { RoutePath } from "../loader/RoutesLoader";

enum AuthMode {
   SignIn = "signin",
   SignUp = "signup"
}

const SignWrapper = (props: any) => {
   const { mode } = props
   const navigate = useNavigate()
   const user = useAuth().user

   React.useEffect(() => {
     if(user) {
       navigate(RoutePath.Chat, {replace: true})
     }
   }, [user])

   return (
      <div className="flex justify-center items-center h-screen bg-amber-400">
        <div className="w-4/5 sm:w-96 bg-white rounded px-4 py-8 shadow-lg max-h-screen ease-in duration-300">
          {mode === AuthMode.SignIn && <SignIn/>}
          {mode === AuthMode.SignUp && <SignUp/>}
        </div>
      </div>
    );
}

export default SignWrapper