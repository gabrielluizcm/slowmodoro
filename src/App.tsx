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
          alt="Reverse Pomodoro logo"
        />
        <h1>Reverse Pomodoro</h1>
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
