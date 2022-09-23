import React from 'react';

const User = ({user,getUserId}) => {
    return (
        <div className={'User'}>
            <h2>{user.id} {user.name}</h2>
            <p>Username: {user.username}   <br/>
                Email: {user.email}
            </p>

            <button onClick={() => getUserId(user.id)}>Posts</button>
        </div>
    );
};

export default User;


