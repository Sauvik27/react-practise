import React from 'react'

function Button_26({handleClick, children}) {
    console.log('Rendering button - ',children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button_26)
