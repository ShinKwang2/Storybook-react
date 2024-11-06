import { useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Example from './Example';

function App() {
  const [count, setCount] = useState<number>(0);

  const addCount = useCallback((count: number) => {
    return count;
  }, []);

  let temp = 0;

  return (
    <>
      <Example />
    </>
  );
}

export default App;
