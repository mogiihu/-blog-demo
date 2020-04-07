import React, { useState } from "react";

/**
 * 用来演示 react hooks 的 useState 如何获取最新的 state
 * @returns {*}
 * @constructor
 */
const Counter = () => {
    const [counter, setCounter] = useState(0);

    const onAlertButtonClick = () => {
        alert("counter: " + counter);
    };

    return (
        <div>
        <p>你点击了{counter}次</p>
        <button className='button1' onClick={() => setCounter(counter + 1)}>点我</button>
        <button className='button2' onClick={onAlertButtonClick}>猜猜counter现在是几</button>
        </div>
    );
};

export default Counter;