import React, {useState,useEffect} from 'react'

function HookCounteOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - updating doc title');
        document.title = `You clicked ${count} times`;
    }, [count])

    return (
        <div>
            <button onClick={() =>setCount(count+1)}>Click {count}</button>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default HookCounteOne
