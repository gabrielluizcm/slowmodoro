import React from 'react';

import { ChillingTimer } from './components/ChillingTimer';

import './index.scss';

function App() {
  return (
    <>
      <h2>Reverse Pomodoro WIP</h2>
      <ChillingTimer defaultTime={300} />
    </>
  );
}

export default App;
