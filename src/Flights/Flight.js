import React from 'react';

const Flight = ({flight: {mission_name, launch_year, links: {mission_patch}}}) => {
    return (
        <div>
            {mission_name} {launch_year}
            <div>
                <img src={mission_patch} alt="mission_patch"/>
            </div>

        </div>
    );
};

export default Flight;