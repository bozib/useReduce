import React, {useState,useRef,useEffect} from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
            intervalRef.current= setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
        clearInterval(intervalRef.current)
        };
    }, [])

    return (
        <div>
          Hook timer -- {timer} 
          <button onClick = {() => clearInterval(intervalRef.current)}>Clear Interval</button> 
        </div>
    )
}

export default HookTimer
