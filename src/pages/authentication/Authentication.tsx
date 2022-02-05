import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

enum AuthMode {
   SignIn = "signin",
   SignUp = "signup"
}

const Authentication = (props: any) => {
   const { mode } = props

   return (
      <div className="flex justify-center items-center h-screen bg-amber-400">
        <div className="w-4/5 sm:w-96 bg-white rounded px-4 py-8 shadow-lg">
          {mode === AuthMode.SignIn && <SignIn/>}
          {mode === AuthMode.SignUp && <SignUp/>}
        </div>
      </div>
    );
}

export default Authentication