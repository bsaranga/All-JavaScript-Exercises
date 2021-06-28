import React, {useState, useEffect} from 'react'
import {hot} from 'react-hot-loader'

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click
            </button>
        </div>
    )
}

export default hot(module)(Example)