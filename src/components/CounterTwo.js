import React , {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return {...state, firstCounter: state.firstCounter + action.value }
        break;
        case 'decrement': return {...state, firstCounter: state.firstCounter - action.value }
        break;
        case 'reset': return initialState
        break;
        case 'increment2': return {...state, secondCounter: state.secondCounter + action.value }
        break;
        case 'decrement2': return {...state, secondCounter: state.secondCounter - action.value }
        break;
    
        default: return state
            break;
    }
} 

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Count - {count.firstCounter}</div>
           <div>Second Count - {count.secondCounter}</div>
            <button onClick= {() => dispatch({type: 'increment', value:1})}>Increment</button>
            <button onClick= {() => dispatch({type: 'decrement', value:1})}>Decrement</button>
            <button onClick= {() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick= {() => dispatch({type: 'increment', value:5})}>Increment 5</button>
            <button onClick= {() => dispatch({type: 'decrement', value:5})}>Decrement 5</button>
         <div>
             <button onClick = {() => dispatch({type: 'increment2', value: 1})}>Increment counter TWO</button>
             <button onClick = {() => dispatch({type: 'decrement2', value: 1})}>Decrement counter TWO</button>
         </div>
        </div>
    )
}

export default CounterTwo
