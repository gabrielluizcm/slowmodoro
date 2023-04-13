import React, { createContext } from 'react';

import { Logo } from '../atoms/Logo';
import { Menu } from '../organisms/Menu';
import { MainTimer } from '../organisms/MainTimer';
import { Counters } from '../atoms/Counters';
import { Footer } from '../atoms/Footer';

import '../../index.scss';
import { Wrapper, Background, PomodoroContainer } from './styled';

export type Status = 'idle' | 'chilling' | 'working';

export const StatusContext = createContext<Status>('idle');
export const PausedContext = createContext(false);
export const ReversePomodorosContext = createContext(0);
export const AutoPlayContext = createContext(true);
export const EnableSoundsContext = createContext(true);

function App() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [paused, setPaused] = React.useState(false);
  const [startChillTime, setStartChillTime] = React.useState(25 * 60);
  const [startShortWorkTime, setStartShortWorkTime] = React.useState(5 * 60);
  const [startLongWorkTime, setStartLongWorkTime] = React.useState(15 * 60);
  const [reversePomodoros, setReversePomodoros] = React.useState(0);
  const [totalChillingTime, setTotalChillingTime] = React.useState(0);
  const [totalWorkingTime, setTotalWorkingTime] = React.useState(0);
  const [autoPlay, setAutoPlay] = React.useState(true);
  const [enableSounds, setEnableSounds] = React.useState(true);

  const increaseTotalChillingTime = () => {
    setTotalChillingTime(totalChillingTime + 1);
  };

  const increaseTotalWorkingTime = () => {
    setTotalWorkingTime(totalWorkingTime + 1);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  }

  const toggleEnableSounds = () => {
    setEnableSounds(!enableSounds);
  }

  return (
    <Wrapper>
      <Background
        status={status}
        paused={paused}
        longWork={!!(reversePomodoros && reversePomodoros % 4 === 0)}
      />
      <Logo />
      <AutoPlayContext.Provider value={autoPlay}>
        <EnableSoundsContext.Provider value={enableSounds}>
          <Menu
            chillTime={startChillTime / 60}
            shortWorkTime={startShortWorkTime / 60}
            longWorkTime={startLongWorkTime / 60}
            setChillTime={(minutes: number) => setStartChillTime(minutes * 60)}
            setShortWorkTime={(minutes: number) =>
              setStartShortWorkTime(minutes * 60)
            }
            setLongWorkTime={(minutes: number) =>
              setStartLongWorkTime(minutes * 60)
            }
            setAutoPlay={() => toggleAutoPlay()}
            setEnableSounds={() => toggleEnableSounds()}
          />
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
        </EnableSoundsContext.Provider>
      </AutoPlayContext.Provider>
      <Footer />
    </Wrapper>
  );
}

export default App;
