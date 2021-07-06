import React from 'react';
import { AlertProvider } from './alert/AlertContext';
import Alert from './alert/Alert';
import Main from './Main';
import './App.css';

function App() {
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
}

export default App;
