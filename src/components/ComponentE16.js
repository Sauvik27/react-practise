import React,{useContext} from 'react'
import ComponentF16 from './ComponentF16'
import {UserContext, ChannelContext} from '../App'

function ComponentE16() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            {user} | {channel}
        </div>
    )
}

export default ComponentE16
