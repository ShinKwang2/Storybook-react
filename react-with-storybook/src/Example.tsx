import { useCallback, useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  const calculate = useCallback(() => {
    console.log('calculate 실행!');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => console.log(calculate())}>Callback 결과 출력</button>
    </div>
  );
};

export default Example;
