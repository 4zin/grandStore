import React, { createContext, useState } from "react";
import  { AuthContextProps, User } from "../../types";

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export function AuthProvider({children}: {children: React.ReactNode}) {

    const [user, setUser] = useState<User | null>(null)

    const login = (user: User) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}