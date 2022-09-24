import React from 'react';

const Album = ({album}) => {


    return (
        <div>
            <h3>userId: {album.userId}</h3>

            <p>{album.id}. {album.title}</p>
        </div>
    );
};

export {Album};