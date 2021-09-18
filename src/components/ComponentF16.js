import React from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentF16() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user =>{
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel =>{
                                        return <div>User context value {user} and channel context value {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF16
