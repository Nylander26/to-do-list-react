import React from "react";
import './profile.css'
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {

    const {user, isAuthenticated, isLoading} = useAuth0();

    if(isLoading){
        return <div>Loading...</div>
    }

    return(
        isAuthenticated && (
            <div className="profile-container">
                <img src={user.picture} alt={user.name} className="profile-img" />
                <h2 className="profile-data">{user.name}</h2>
            </div>
        )
    )
}