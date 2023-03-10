import React from 'react';

import { MainTimer } from './components/MainTimer';
// import { WorkingTimer } from './components/WorkingTimer';

import './index.scss';

function App() {
  return (
    <>
      <MainTimer
        chillTime={25 * 60}
        shortWorkTime={5 * 60}
        longWorkTime={15 * 60}
      />
    </>
  );
}

export default App;
