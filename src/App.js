import React, {useReducer} from 'react';

const App = () => {

    const reducer = (state, action) => {
        return state;
    }

    let [state, dispatch] = useReducer(reducer, {count1: 0});

    return (<>
    </>);
};

export default App;