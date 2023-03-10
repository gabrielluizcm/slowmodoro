import React from 'react';

import { ChillingTimer } from './components/ChillingTimer';
// import { WorkingTimer } from './components/WorkingTimer';

import './index.scss';

function App() {
  return (
    <>
      <ChillingTimer defaultTime={25 * 60} />
    </>
  );
}

export default App;
