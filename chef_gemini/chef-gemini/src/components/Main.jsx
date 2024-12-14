import { useState } from 'react'

function Counter() {
    let [value, setValue] = useState(0)

    function decr() {
        setValue((parseInt(value) - 1))
    }

    function incr() {
        setValue((parseInt(value) + 1))
    }
    return (
        <main>
            <h1>Value: {value}</h1>
            <div className="buttons">
                <button onClick={decr}>-</button>
                <button onClick={incr}>+</button>
            </div>
        </main>
    )
}

export default Counter;