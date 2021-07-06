import { useState, useMemo, useEffect } from 'react';
import './App.css';

function complexCompute(num) {
  console.log('complexCompute');
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? 'blue' : 'black',
    };
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log('styles Changed');
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>Counted Value: {computed} </h1>
      <button
        className={'btn btn-success'}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Increase
      </button>
      <button
        className={'btn btn-danger'}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Increase
      </button>

      <button
        className={'btn btn-warning'}
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>
    </div>
  );
}

export default App;
