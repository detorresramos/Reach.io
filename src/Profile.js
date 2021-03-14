import React from 'react';
import './profile.css';
import BottomNav from './BottomNav';

function Profile() {
    return (
        <div class="profile">
            <div class="profile-header">
                <img src="/images/profile-icon.png" />
                <p class="username">{localStorage.getItem("name")}</p>
            </div>
            <div class="settings">
                <p>Account Security</p>
                <p>Notification Settings</p>
                <p>Your Friends</p>
                <p>Wellness Tips</p>
                <p>Sign Out</p>
            </div>
            <BottomNav/>
        </div>
    )
}

export default Profile
