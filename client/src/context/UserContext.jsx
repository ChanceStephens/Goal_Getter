import React, { useState } from 'react';
import axios from 'axios';

// Create UserContext
export const UserContext = React.createContext();

// Configure axios instance with interceptor to add token to headers
const userAxios = axios.create();
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// UserProvider component to wrap the application and provide user context
export default function UserProvider(props) {
    // Initial state
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [], // Initial empty array for issues
        errMsg: '' // Initial empty string for error messages
    };

    const [userState, setUserState] = useState(initState);
    const [allIssues, setAllIssues] = useState([]);
    const [allComments, setAllComments] = useState([]);

    // Function to handle user signup
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

    // Function to handle user login
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

    // Function to handle user logout
    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUserState({
            user: {},
            token: "",
            issues: []
        });
    }

    // Function to handle authentication errors
    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }));
    }

    // Function to reset authentication error messages
    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        }));
    }

    // Function to get issues for the logged-in user
    function getUserIssues() {
        userAxios.get("/api/main/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }));
            })
            .catch(err => console.log(err));
    }

    // Function to add a new issue
    function addIssue(newIssues) {
        userAxios.post("/api/main/issue", newIssues)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }));
            })
            .catch(err => console.log(err));
    }

    // Function to get all issues
    function getAllIssues() {
        userAxios.get('/api/main/issue')
            .then(res => setAllIssues(res.data))
            .catch(err => console.log(err));
    }

    // Function to upvote an issue
    function upvoteIssue(issueId) {
        userAxios.put(`/api/main/issue/upvote/${issueId}`)
            .then(res => {
                setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
                }));
            })
            .catch(err => console.log(err));
    }

    // Function to downvote an issue
    function downvoteIssue(issueId) {
        userAxios.put(`/api/main/issue/downvote/${issueId}`)
            .then(res => {
                setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
                }));
            })
            .catch(err => console.log(err));
    }

    // Function to get all comments
    function getAllComments() {
        userAxios.get('/api/main/comments')
            .then(res => setAllComments(res.data))
            .catch(err => console.log(err));
    }

    // Function to add a new comment
    function addComment(id, comment) {
        userAxios.post(`/api/main/comments/${id}`, comment)
            .then(res => {
                setAllComments(prevAllComments => [
                    ...prevAllComments,
                    res.data
                ]);
            })
            .catch(err => console.error('Error adding comment:', err));
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                resetAuthErr,
                getUserIssues,
                getAllIssues,
                allIssues,
                getAllComments,
                allComments,
                addComment,
                upvoteIssue,
                downvoteIssue,
            }}>
            {props.children}
        </UserContext.Provider>
    );
}
