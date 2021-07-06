import { useState } from 'react';
import './App.css';

function computeInitialcounter() {
  console.log('Some calculations');
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => computeInitialcounter());

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  });

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...state,
        title: 'New Title',
      };
    });
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Increase
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Decrease
      </button>
      <button onClick={updateTitle} className="btn btn-default">
        Change name
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
