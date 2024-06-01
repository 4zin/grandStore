// import  { useContext } from 'react'
// import { AuthContext } from './context/authContext'
// import { Navigate, Outlet } from 'react-router-dom';

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export default function ProtectedRoute({children}: {children: React.ReactNode}) {

    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <>{children}</>

}
