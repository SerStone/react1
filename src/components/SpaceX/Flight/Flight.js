import React from 'react';

const Flight = (props) => {
    let {flight} = props;
    return (
        <div className={'flight'}>
            <h2>{flight.mission_name} {flight.launch_year}</h2><br/>
            <img src={flight.links.mission_patch_small} alt={'SpaceX Img'}/>
        </div>
    );
};

export default Flight;