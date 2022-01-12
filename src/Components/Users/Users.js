import React, {useEffect, useState} from 'react';
import User from "./User/User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(data => data.json())
            .then(users => setUsers(users))
    })
    return (
        <div>
            {users.map(v =>
                <User
                    id={v.id}
                    name={v.name}
                    username={v.username}
                    email={v.email}
                    street={v.address.street}
                    suite={v.address.suite}
                    city={v.address.city}
                    zipcode={v.address.zipcode}
                    lat={v.address.geo.lat}
                    lng={v.address.geo.lng}
                    phone={v.phone}
                    website={v.website}
                    companyName={v.company.name}
                    companycatchPhrase={v.company.catchPhrase}
                    companybs={v.company.bs}
                />)}

        </div>
    );
};

export default Users;