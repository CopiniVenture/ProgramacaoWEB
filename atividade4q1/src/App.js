import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const stopCounter = () => {
    setIsRunning(false);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={stopCounter} disabled={!isRunning}>
        Parar Contador
      </button>
    </div>
  );
}

export default App;
