import React, { Component } from 'react';
import { Card } from "antd";
export { FriendCard }


function FriendCard(props) {
    return(
        <View>
            <Avatar alt={props.name} src="images/profile-pic.png" />
            <>
                <h1>{props.name}</h1>
            </>
            <p> Click on an emoji to view the emoji short name </p>
        </View>
    )
}
