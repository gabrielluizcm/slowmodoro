import React from 'react';

import { Timer } from './components/Timer';

import './index.css';

function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <h2>Reverse Pomodoro WIP</h2>
      <Timer defaultTime={300} />
    </>
  );
}

export default App;
