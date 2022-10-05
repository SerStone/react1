import React from 'react';

const User = ({user}) => {
    return (
        <div className={'User'}>
            {user.id}. {user.name}
            <br/>
            {user.username}
            <br/>
            {user.email}   <br/>
            {user.company.catchPhrase}
        </div>
    );
};

export {User};