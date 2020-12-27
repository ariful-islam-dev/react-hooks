import React, { useState } from 'react'
import { Button } from 'reactstrap';

const MyHook = () => {
    const [count, setCount] = useState(0);

    console.log('count updated:', count);

    return (
        <div>
            <h3>I am hook , I am awesome</h3>
            <h1>Count: {count}</h1>
            <Button color="success" onClick={() => setCount(count + 1)}>Increment</Button>
            <Button color="warning" onClick={() => setCount(prev => prev > 0 ? prev - 1 : prev)}>Decrement</Button>
            <Button color="danger" onClick={() => setCount(0)}>Reset</Button>
        </div>
    )
}

export default MyHook
