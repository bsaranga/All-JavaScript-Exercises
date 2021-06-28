import { React, useState } from 'react'
import moment from 'moment'
import { Button } from 'antd'

export default function Timer(props) {
    
    const [time, setTime] = useState(moment("000000", "hhmmss").format("HH:mm:ss"))
    const [log, setLog] = useState()
    
    function start(){
        setLog(setInterval(() => {
            setTime(moment().format("HH:mm:ss"))
        }, 1000))
    }

    function stop(){
        clearInterval(log)
    }

    return (
        <div>
            <h1>Timer</h1>
            <span>
                <Button type="primary" onClick={start}>Start</Button>
                <Button type="dashed" onClick={stop}>Stop</Button>
            </span>
            <h2>{time}</h2>
        </div>
    )
}