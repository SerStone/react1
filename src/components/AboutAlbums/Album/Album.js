import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {


    return (
        <div className={'Album'}>
            <h3>userId: {album.userId}</h3>

            <p>{album.id}. {album.title}</p>
            <Link to={`albums/${album.id}`}>{album.title}</Link>
        </div>
    );
};

export {Album};