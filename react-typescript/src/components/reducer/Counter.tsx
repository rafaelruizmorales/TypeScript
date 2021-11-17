import { useReducer } from "react";

type stateCounter = {
    counter: number
}

type actionCounter = {
    type: string
    payload?: number
}

const initialState = { counter: 0 }
const reducer = (state: stateCounter = initialState, action: actionCounter) => {
    switch(action.type) {
        case 'increment':
            return { counter: state.counter + (action.payload || 1)}
        case 'decrement':
            return { counter: state.counter - (action.payload || 1)}
        case 'reset':
            return initialState
        default:
            return state;
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>
                <button onClick={() => dispatch( {type: 'reset'} ) }>RESET</button> 
            </p>
            <p>
                <button onClick={() => dispatch( {type: 'decrement', payload:1} ) }>DECREMENT</button>            
                Counter: {state.counter}
                <button onClick={() => dispatch( {type: 'increment', payload:1} ) }>INCREMENT</button>
            </p>
        </div>
    )
} 