

import React, { useState } from 'react';
import axios from 'axios';

// Create UserContext
export const UserContext = React.createContext();

// Configure axios instance with interceptor to add token to headers
const userAxios = axios.create({
    baseURL: '/api/main'  // Ensure this matches the base URL for your API endpoints
});
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// UserProvider component to wrap the application and provide user context
export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [], 
        errMsg: '' 
    };

    const [userState, setUserState] = useState(initState);

    function signup(credentials) {
        axios.post("/api/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }));
            })
            .catch(err => handleAuthErr(err.response.data.errMsg));
    }

    function login(credentials) {
        axios.post("/api/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }));
            })
            .catch(err => handleAuthErr(err.response.data.errMsg));
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUserState({
            user: {},
            token: "",
        });
    }

    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }));
    }

    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        }));
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr,
            }}>
            {props.children}
        </UserContext.Provider>
    );
}
