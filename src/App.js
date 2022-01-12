import React, {useEffect} from 'react';

const App = () => {

    useEffect(() =>
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then(data => data.json())
            .then(value => value.log)
    )


    return (
        <div>

        </div>
    );
};

export default App;