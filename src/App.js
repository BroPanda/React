import React, {useReducer} from 'react';

const App = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc':
                return {count1: state.count1 + 1}
        }
        return state;
    }

    let [state, dispatch] = useReducer(reducer, {count1: 0});


    return (<>
        <div>{state.count1}</div>
        <button onClick={() => dispatch({type: 'inc'})}>inc</button>
        <button onClick={() => dispatch({type: 'dec'})}>dec</button>
        <button onClick={() => dispatch({type: 'res'})}>res</button>
    </>);
};

export default App;