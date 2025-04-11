import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({ name: "Ulfat Hussain" });

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}