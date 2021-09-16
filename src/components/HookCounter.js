import React, {useState} from 'react'

export default function HookCounter() {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
        setCounter(counter+1);
    }
    return (
        <div>
            <button onClick={incrementCount}>Count {counter}</button>
        </div>
    )
}
