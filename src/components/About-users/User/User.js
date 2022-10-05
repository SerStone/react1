import React from 'react';

const User = ({user}) => {
    return (
        <div className={'User'}>
            {user.id}. {user.name}
            <br/>
            {user.email}
        </div>
    );
};

export {User};