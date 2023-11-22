//Create a component that displays a progress bar with a dynamic percentage.
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [data, setData] = useState(0);
    let interval;
    useEffect(() => {
        if (data < 100) {
            interval = setInterval(() => {
                setData((value) => value + 1);
            }, 100)

        }
        return ()=>clearInterval(interval);
    }, [data])
    return (
        <>
            <p>{data}%</p>
        </>
    )
}
export default ProgressBar;