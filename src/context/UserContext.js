import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ });

    const changeValue = (newUser) => {
        console.log("new user", newUser);
        setUser(newUser);
      };
    

    return (
        <UserContext.Provider value={{ user, changeValue }}>
            {children}
        </UserContext.Provider>
    );
}