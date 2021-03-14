import React from 'react'
import './profile.css'

function Profile() {
    return (
        <div class="profile">
            <div class="profile-header">
                <img src="/images/profile-icon.png" />
                <p class="username">User Name</p>
            </div>
            <div class="settings">
                <p>Account Security</p>
                <p>Notification Settings</p>
                <p>Your Friends</p>
                <p>Wellness Tips</p>
                <p>Sign Out</p>
            </div>
        </div>
    )
}

export default Profile
