import React, { useContext, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children, userData }) => {
    return (
        <UserContext.Provider value={userData}>
        {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};