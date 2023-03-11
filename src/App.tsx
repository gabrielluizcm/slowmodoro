import React from 'react';

import { MainTimer } from './components/MainTimer';
import { Footer } from './components/Footer';

import './index.scss';

function App() {
  return (
    <>
      <MainTimer
        chillTime={25 * 60}
        shortWorkTime={5 * 60}
        longWorkTime={15 * 60}
      />
      <Footer />
    </>
  );
}

export default App;
