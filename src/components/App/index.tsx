import React, { createContext } from 'react';

import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { MainTimer } from '../MainTimer';
import { Counters } from '../Counters';
import { Footer } from '../Footer';

import '../../index.scss';
import { Wrapper, Background, PomodoroContainer } from './styled';

export type Status = 'idle' | 'chilling' | 'working';

export const StatusContext = createContext<Status>('idle');
export const PausedContext = createContext(false);
export const ReversePomodorosContext = createContext(0);

function App() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [paused, setPaused] = React.useState(false);
  const [startChillTime, setStartChillTime] = React.useState(25 * 60);
  const [startShortWorkTime, setStartShortWorkTime] = React.useState(5 * 60);
  const [startLongWorkTime, setStartLongWorkTime] = React.useState(15 * 60);
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
    <Wrapper>
      <Background
        status={status}
        longWork={!!(reversePomodoros && reversePomodoros % 4 === 0)}
      />
      <Logo />
      <Menu />
      <PomodoroContainer>
        <StatusContext.Provider value={status}>
          <PausedContext.Provider value={paused}>
            <ReversePomodorosContext.Provider value={reversePomodoros}>
              <MainTimer
                chillTime={startChillTime}
                shortWorkTime={startShortWorkTime}
                longWorkTime={startLongWorkTime}
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
      </PomodoroContainer>
      <Footer />
    </Wrapper>
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
