import React,{useState, useRef} from 'react'
import Timer from './Timer';

function Stopwatch() {
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isStop, setIsStop] = useState(false);
    const [flag, setFlag] = useState(0);
    const countference = useRef(null);
    
    const start = () => {
        setIsActive(true);
        setIsStop(true);
        countference.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        },1000)
        setFlag(0);
    }
    const stop = () => {
        if(flag === 0){
            clearInterval(countference.current);
            setIsStop(false);
            setFlag(1);
        }
        else{
            setIsStop(true);
            countference.current = setInterval(() => {
                setTimer((timer) => timer + 1)
            },1000);
            setFlag(0);
        }
    }
    const reset = () => {
        clearInterval(countference.current);
        setIsStop(false);
        setIsActive(false);
        setTimer(0);
        setFlag(0);
    }

    return (
        <div>
            <div className="stcard">
                <Timer timer={timer}/>
            </div>
            <div className="buttons">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Pause/Play</button>
                <button onClick={reset}>Reset</button>
            </div>
            
        </div>
    )
}

export default Stopwatch
