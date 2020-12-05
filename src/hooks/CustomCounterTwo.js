import React, {useState} from 'react'
import useCounter from './useCounter'

function CustomCounterTwo() {
    const [count,increment,decrement,reset] = useCounter(10,3)
    return (
        <div>
            Count -- {count}
            <button onClick= {increment}>Increment</button>
            <button onClick= {decrement} >Decrement</button>
            <button onClick= {reset}>Reset</button>            
        </div>
    )
}

export default CustomCounterTwo
