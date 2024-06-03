import axios from "axios";
import { LoginResponse } from "../types";

const API_URL = "http://localhost:3000/auth";

export const register = async (name: string, lastName: string, userName: string, email: string, password: string) => {
    return axios.post(API_URL + '/register', {
      name,
      lastName,
      userName,
      email,
      password,
    });
  };

export const login = async (email: string, password: string) => {
    const {data} = await axios.post<LoginResponse>(API_URL + '/login', {
        email,
        password
    })

    return {
        token: data.token,
        user: data.user
    }
}