import React, {useState} from 'react';
import classes from './counter.module.scss'
export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <button onClick={increment} className={classes.start}>increment</button>
            <div>{counter}</div>
        </>
    );
};

;