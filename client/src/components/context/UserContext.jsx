// // import React, { useState } from 'react';
// // import axios from 'axios';

// // // Create UserContext
// // export const UserContext = React.createContext();

// // // Configure axios instance with interceptor to add token to headers
// // const userAxios = axios.create();
// // userAxios.interceptors.request.use(config => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //         config.headers.Authorization = `Bearer ${token}`;
// //     }
// //     return config;
// // });

// // // UserProvider component to wrap the application and provide user context
// // export default function UserProvider(props) {
// //     const initState = {
// //         user: JSON.parse(localStorage.getItem("user")) || {},
// //         token: localStorage.getItem("token") || "",
// //         errMsg: '',
// //         isLogin: true,
// //         inputs: { username: "", password: "" }
// //     };

// //     const [userState, setUserState] = useState(initState);

// //     const setUser = (user) => {
// //         setUserState(prevUserState => ({
// //             ...prevUserState,
// //             user
// //         }));
// //         localStorage.setItem("user", JSON.stringify(user));
// //     };

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setUserState(prevState => ({
// //             ...prevState,
// //             inputs: {
// //                 ...prevState.inputs,
// //                 [name]: value
// //             }
// //         }));
// //     };

// //     const toggleForm = () => {
// //         setUserState(prevState => ({
// //             ...prevState,
// //             isLogin: !prevState.isLogin,
// //             errMsg: '' // Reset error message when toggling forms
// //         }));
// //     };

// //     function signup(credentials) {
// //         axios.post("/api/auth/signup", credentials)
// //             .then(res => {
// //                 const { user, token } = res.data;
// //                 localStorage.setItem("token", token);
// //                 localStorage.setItem("user", JSON.stringify(user));
// //                 setUserState(prevUserState => ({
// //                     ...prevUserState,
// //                     user,
// //                     token
// //                 }));
// //             })
// //             .catch(err => handleAuthErr(err.response.data.errMsg));
// //     }

// //     function login(credentials) {
// //         axios.post("/api/auth/login", credentials)
// //             .then(res => {
// //                 const { user, token } = res.data;
// //                 localStorage.setItem("token", token);
// //                 localStorage.setItem("user", JSON.stringify(user));
// //                 setUserState(prevUserState => ({
// //                     ...prevUserState,
// //                     user,
// //                     token
// //                 }));
// //             })
// //             .catch(err => handleAuthErr(err.response.data.errMsg));
// //     }

// //     function logout() {
// //         localStorage.removeItem("token");
// //         localStorage.removeItem("user");
// //         setUserState({
// //             user: {},
// //             token: "",
// //         });
// //     }

// //     function handleAuthErr(errMsg) {
// //         setUserState(prevUserState => ({
// //             ...prevUserState,
// //             errMsg
// //         }));
// //     }

// //     function resetAuthErr() {
// //         setUserState(prevUserState => ({
// //             ...prevUserState,
// //             errMsg: ''
// //         }));
// //     }

// //     return (
// //         <UserContext.Provider
// //             value={{
// //                 ...userState,
// //                 signup,
// //                 login,
// //                 logout,
// //                 resetAuthErr,
// //                 setUser,
// //                 handleInputChange,
// //                 toggleForm
// //             }}>
// //             {props.children}
// //         </UserContext.Provider>
// //     );
// // }


// import React, { useState } from 'react';
// import axios from 'axios';

// // Create UserContext
// export const UserContext = React.createContext();

// // Configure axios instance with interceptor to add token to headers
// const userAxios = axios.create();
// userAxios.interceptors.request.use(config => {
//     const token = localStorage.getItem("token");
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// // UserProvider component to wrap the application and provide user context
// export default function UserProvider(props) {
//     // Initial state
//     const initState = {
//         user: JSON.parse(localStorage.getItem("user")) || {},
//         token: localStorage.getItem("token") || "",
//         issues: [], // Initial empty array for issues
//         errMsg: '' // Initial empty string for error messages
//     };

//     const [userState, setUserState] = useState(initState);

//     // Function to handle user signup
//     function signup(credentials) {
//         axios.post("/api/auth/signup", credentials)
//             .then(res => {
//                 const { user, token } = res.data;
//                 localStorage.setItem("token", token);
//                 localStorage.setItem("user", JSON.stringify(user));
//                 setUserState(prevUserState => ({
//                     ...prevUserState,
//                     user,
//                     token
//                 }));
//             })
//             .catch(err => handleAuthErr(err.response.data.errMsg));
//     }

//     // Function to handle user login
//     function login(credentials) {
//         axios.post("/api/auth/login", credentials)
//             .then(res => {
//                 const { user, token } = res.data;
//                 localStorage.setItem("token", token);
//                 localStorage.setItem("user", JSON.stringify(user));
//                 setUserState(prevUserState => ({
//                     ...prevUserState,
//                     user,
//                     token
//                 }));
//             })
//             .catch(err => handleAuthErr(err.response.data.errMsg));
//     }

//     // Function to handle user logout
//     function logout() {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         setUserState({
//             user: {},
//             token: "",
//         });
//     }

//     // Function to handle authentication errors
//     function handleAuthErr(errMsg) {
//         setUserState(prevUserState => ({
//             ...prevUserState,
//             errMsg
//         }));
//     }

//     // Function to reset authentication error messages
//     function resetAuthErr() {
//         setUserState(prevUserState => ({
//             ...prevUserState,
//             errMsg: ''
//         }));
//     }






//     return (
//         <UserContext.Provider
//             value={{
//                 ...userState,
//                 signup,
//                 login,
//                 logout,
//                 resetAuthErr,
//             }}>
//             {props.children}
//         </UserContext.Provider>
//     );
// }


// // 
// import React, { useState } from 'react';
// import axios from 'axios';

// // Create UserContext
// export const UserContext = React.createContext();

// // Configure axios instance with interceptor to add token to headers
// const userAxios = axios.create();
// userAxios.interceptors.request.use(config => {
//     const token = localStorage.getItem("token");
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// // UserProvider component to wrap the application and provide user context
// export default function UserProvider(props) {
//     const initState = {
//         user: JSON.parse(localStorage.getItem("user")) || {},
//         token: localStorage.getItem("token") || "",
//         errMsg: ''
//     };

//     const [userState, setUserState] = useState(initState);

//     function signup(credentials) {
//         axios.post("/api/auth/signup", credentials)
//             .then(res => {
//                 const { user, token } = res.data;
//                 localStorage.setItem("token", token);
//                 localStorage.setItem("user", JSON.stringify(user));
//                 setUserState(prevUserState => ({
//                     ...prevUserState,
//                     user,
//                     token
//                 }));
//             })
//             .catch(err => handleAuthErr(err.response.data.errMsg));
//     }

//     function login(credentials) {
//         axios.post("/api/auth/login", credentials)
//             .then(res => {
//                 const { user, token } = res.data;
//                 localStorage.setItem("token", token);
//                 localStorage.setItem("user", JSON.stringify(user));
//                 setUserState(prevUserState => ({
//                     ...prevUserState,
//                     user,
//                     token
//                 }));
//             })
//             .catch(err => handleAuthErr(err.response.data.errMsg));
//     }

//     function logout() {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         setUserState({
//             user: {},
//             token: "",
//         });
//     }

//     function handleAuthErr(errMsg) {
//         setUserState(prevUserState => ({
//             ...prevUserState,
//             errMsg
//         }));
//     }

//     function resetAuthErr() {
//         setUserState(prevUserState => ({
//             ...prevUserState,
//             errMsg: ''
//         }));
//     }

//     return (
//         <UserContext.Provider
//             value={{
//                 ...userState,
//                 signup,
//                 login,
//                 logout,
//                 resetAuthErr,
//             }}>
//             {props.children}
//         </UserContext.Provider>
//     );
// }


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
