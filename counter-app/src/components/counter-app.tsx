import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((state) => state + 1);
  };

  const sub = () => {
    setCount((state) => state - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={sub}> Subtract</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
