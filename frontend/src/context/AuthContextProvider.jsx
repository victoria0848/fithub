import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(() => {
        return localStorage.getItem("fithub_token") || null;
    });

    useEffect(() => {
        if (authToken) {
            const tokenString = authToken?.accessToken || authToken;
            localStorage.setItem("fithub_token", tokenString);
        } else {
            localStorage.removeItem("fithub_token");
        }
        console.log("FitHub Auth Token: ", authToken);
    }, [authToken]);

    function logout() {
        setAuthToken(null);
        localStorage.removeItem("fithub_token");
    }

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};