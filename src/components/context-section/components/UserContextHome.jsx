import React from "react";
import Login from "./Login";
import UserContextProvider from "../context/UserContextProvider";
import Profile from "./Profile";

export default function UserContextHome() {
    return (
        <div>
            <h2>User Context Home</h2>
            <br />
            <UserContextProvider>
                <Login />
                <hr />
                <Profile />
            </UserContextProvider>

        </div>
    );
}
