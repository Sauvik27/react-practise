import React,{useState} from 'react'

function Timer(props) {
    const sec = `0${(props.timer % 60)}` .slice(-2);
    const min = `${Math.floor(props.timer / 60)}`;
    const gmin = `0${min%60}`.slice(-2);
    const ghours = `0${Math.floor(props.timer / 3600)}`.slice(-2)
    return (
        <div>
            <h1>{ghours} : {gmin} : {sec}</h1>
        </div>
    )
}

export default Timer
