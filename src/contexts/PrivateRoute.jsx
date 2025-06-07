import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    const location = useLocation()

    if(!user){
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;