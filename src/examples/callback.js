import { useCallback, useState } from 'react';
import ItemsList from './itemsList';
import './App.css';

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'blue' : 'black',
  };

  const generateItemsFromAPI = useCallback(
    (num) => {
      return new Array(count).fill('').map((_, i) => `Element ${i + num}`);
    },
    [count],
  );

  return (
    <div>
      <h1 style={styles}>Ammount of elements: {count}</h1>
      <button
        className={'btn btn-success'}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className={'btn btn-warning'}
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
