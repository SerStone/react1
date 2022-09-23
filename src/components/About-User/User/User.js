import React from 'react';

const User = ({user,getUserId}) => {
    return (
        <div className={'User'}>
            <h2>{user.id} {user.name}</h2>
            <p><span>Username</span>: {user.username}   <br/>
                <span>Email</span> {user.email}
            </p>

            <button onClick={() => getUserId(user.id)}>Posts</button>
        </div>
    );
};

export default User;


