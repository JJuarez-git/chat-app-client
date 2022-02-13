import React from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Authentication';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth()
    const location = useLocation()

    console.log('Auth', auth);

    if(!auth.user) {
        return <Navigate to="/signin" state={{from: location}} replace />
    }
    return children
}

export default RequireAuth