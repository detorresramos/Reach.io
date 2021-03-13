import React, { Component } from 'react';

export { ProfilePic }


function ProfilePic( props ) {
    return(
        
        <h1>{props.name}</h1>
        <p> Click on an emoji to view the emoji short name </p>
    )
}
