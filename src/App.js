import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case `inc1`:
            return {...state, count1: state.count1 + 1};
        case 'dec1':
            return {...state, count1: state.count1 - 1};
        case 'res1':
            return {...state, count1: action.payload};

        case `inc2`:
            return {...state, count2: state.count2 + 1};
        case 'dec2':
            return {...state, count2: state.count2 - 1};
        case 'res2':


        case `inc3`:
            return {...state, count3: state.count3 + 1};
        case 'dec3':
            return {...state, count3: state.count3 - 1};
        case 'res3':
            return {...state, count3: action.payload};

        default:
            return state;
    }
}

const App = () => {


    let [state, dispatch] = useReducer(reducer, {count1: 0, count2: 1, count3: 2});


    return (<>
        <div>{state.count1}</div>
        <div>{state.count2}</div>
        <div>{state.count3}</div>

        <div>
            <button onClick={() => dispatch({type: 'inc1'})}>inc</button>
            <button onClick={() => dispatch({type: 'dec1'})}>dec</button>
            <button onClick={() => dispatch({type: 'res1', payload: 8})}>res</button>
        </div>
        <div>
            <button onClick={() => dispatch({type: 'inc2'})}>inc2</button>
            <button onClick={() => dispatch({type: 'dec2'})}>dec2</button>
            <button onClick={() => dispatch({type: 'res2', payload: 0})}>res2</button>
        </div>
        <div>
            <button onClick={() => dispatch({type: 'inc3'})}>inc3</button>
            <button onClick={() => dispatch({type: 'dec3'})}>dec3</button>
            <button onClick={() => dispatch({type: 'res3', payload: 0})}>res3</button>
        </div>

    </>);
};

export default App;