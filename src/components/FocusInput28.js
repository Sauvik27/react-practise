import React,{useEffect, useRef} from 'react'



function FocusInput28() {

    const inputRef = useRef(null)

    useEffect(() => {
        // Focus the input element
        inputRef.current.focus()
    },[])


    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput28
