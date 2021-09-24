import React from 'react'

function Count26({text, count}) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count26)
