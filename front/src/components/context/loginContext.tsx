/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from "react";
import { LoginContextProps } from "../../types";
import { login } from "../../services/authService";

export const LoginContext = createContext<LoginContextProps | undefined>(undefined)

export function LoginProvider({children}: {children: React.ReactNode}) {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const loginHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const data = await login(email, password)
            return data
        } catch (error: any) {
            throw new Error(error.response.data.message)
        }      
    }

    return (
        <LoginContext.Provider value={{
            email,
            setEmail,
            password,
            setPassword,
            loginHandler,
        }}>
            {children}
        </LoginContext.Provider>
    )

}