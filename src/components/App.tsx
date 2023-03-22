import React, { createContext } from 'react';

import { Logo } from './Logo/Logo';
import { MainTimer } from './MainTimer';
import { Counters } from './Counters';
import { Footer } from './Footer';

import '../index.scss';

export type Status = 'idle' | 'chilling' | 'working';

export const StatusContext = createContext<Status>('idle');
export const PausedContext = createContext(false);
export const ReversePomodorosContext = createContext(0);

function App() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [paused, setPaused] = React.useState(false);
  const [reversePomodoros, setReversePomodoros] = React.useState(0);
  const [totalChillingTime, setTotalChillingTime] = React.useState(0);
  const [totalWorkingTime, setTotalWorkingTime] = React.useState(0);

  const background = setBackground(status, reversePomodoros);

  const increaseTotalChillingTime = () => {
    setTotalChillingTime(totalChillingTime + 1);
  };

  const increaseTotalWorkingTime = () => {
    setTotalWorkingTime(totalWorkingTime + 1);
  };

  return (
    <>
      <div className={background} />
      <Logo />
      <div className="pomodoro">
        <StatusContext.Provider value={status}>
          <PausedContext.Provider value={paused}>
            <ReversePomodorosContext.Provider value={reversePomodoros}>
              <MainTimer
                chillTime={25 * 60}
                shortWorkTime={5 * 60}
                longWorkTime={15 * 60}
                setStatus={setStatus}
                setPaused={setPaused}
                setReversePomodoros={setReversePomodoros}
                increaseTotalChillingTime={increaseTotalChillingTime}
                increaseTotalWorkingTime={increaseTotalWorkingTime}
              />
              <Counters
                totalChillingTime={totalChillingTime}
                totalWorkingTime={totalWorkingTime}
              />
            </ReversePomodorosContext.Provider>
          </PausedContext.Provider>
        </StatusContext.Provider>
      </div>
      <Footer />
    </>
  );
}

const setBackground = (status: Status, reversePomodoros: number) => {
  let background = 'background';

  if (status === 'chilling') background += ' chillBackground';
  else if (status === 'working') {
    if (reversePomodoros && reversePomodoros % 4 === 0)
      background += ' longWorkBackground';
    else background += ' shortWorkBackground';
  }
  return background;
};

export default App;
