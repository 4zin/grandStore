/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from "react";
import { RegisterContextProps } from "../../types";
import { register } from "../../services/authService";

export const RegisterContext = createContext<RegisterContextProps | undefined>(undefined)

export function RegisterProvider({children}: {children: React.ReactNode}) {

    const [name, setName] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<string>('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            await register(name, userName, email, password);
            setMessage('Registration successful, please check your email for confirmation link.')
        } catch (error: any) {
            setMessage('')
            setError(error.response?.data?.message)
        }
    }

    return (
        <RegisterContext.Provider value={{
            name,
            setName,
            userName,
            setUserName,
            email,
            setEmail,
            password,
            setPassword,
            submitHandler,
            message,
            error
        }}>
            {children}
        </RegisterContext.Provider>
    )
}