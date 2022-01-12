import React from 'react';

const User = (props) => {
    let {id,
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        lat,
        lng,
        phone,
        website,
        companyName,
        companycatchPhrase,
        companybs
    } = props;

    return (
        <div>
             {id} {name} {username} {email} {street} {suite} {city} {zipcode} {lat} {lng} {phone}{website} {companyName}
            {companycatchPhrase} {companybs}
            <hr/>

        </div>
    );
};

export default User;