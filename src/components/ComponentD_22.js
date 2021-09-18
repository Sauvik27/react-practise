import React,{useContext} from 'react'
import { CountContect } from '../App'

function ComponentD_22() {
    const countContext = useContext(CountContect)
    return (
        <div>
            Component D - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD_22
