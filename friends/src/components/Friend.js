import React from "react";

const Friend = props => {
    return (
        <div>
            <h1>{props.friend.name}</h1>
            <h4>{props.friend.email}</h4>
            <h4>{props.friend.age}</h4>
        </div>
    );
};

export default Friend;