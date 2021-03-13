import React, { Component } from 'react';
import { Avatar, Image} from 'antd';
export { FriendCard }


function FriendCard(props) {
    return(
        <>
            <Avatar src="./images/profile-pic.png" />
            <p> Click on an emoji to view the emoji short name </p>
        </>
    )
}