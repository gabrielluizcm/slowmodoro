import React from 'react';

import { MainTimer } from './components/MainTimer';
import { Footer } from './components/Footer';

import './index.scss';
import reversePomodoroImg from './images/pomodoro.png';

function App() {
  return (
    <>
      <div id="logo">
        <img
          className="logoImg"
          src={reversePomodoroImg}
          alt="Slowmodoro logo"
        />
        <h1>Slowmodoro</h1>
        <h3>a reverse Pomodoro app</h3>
      </div>
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
