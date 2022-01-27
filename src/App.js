import React, {useReducer} from 'react';

const App = () => {

    const reducer = (state, action) => {
        return state;
    }

    let [state, dispatch] = useReducer(reducer, {count1: 0});


    return (<>
        <div>{state.count1}</div>
        <button onClick={dispatch({type: 'inc'})}>inc</button>
        <button onClick={dispatch({type: 'dec'})}>dec</button>
        <button onClick={dispatch({type: 'res'})}>res</button>
    </>);
};

export default App;