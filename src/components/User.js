import React, { useContext } from "react";
import { UserContext } from '../context/UserContext';

export default function User() {
    const { user } = useContext(UserContext)
    return (
        <div>Hello {user.name}</div>
    )
}