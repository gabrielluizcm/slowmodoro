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
export const PomodorosContext = createContext(0);
export const AutoPlayContext = createContext(true);
export const EnableSoundsContext = createContext(true);
export const ReverseModeContext = createContext(false);

function App() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [paused, setPaused] = React.useState(false);
  const [startChillTime, setStartChillTime] = React.useState(25 * 60);
  const [startShortWorkTime, setStartShortWorkTime] = React.useState(5 * 60);
  const [startLongWorkTime, setStartLongWorkTime] = React.useState(15 * 60);
  const [reversePomodoros, setReversePomodoros] = React.useState(0);
  const [pomodoros, setPomodoros] = React.useState(0);
  const [totalChillingTime, setTotalChillingTime] = React.useState(0);
  const [totalWorkingTime, setTotalWorkingTime] = React.useState(0);
  const [autoPlay, setAutoPlay] = React.useState(true);
  const [enableSounds, setEnableSounds] = React.useState(true);
  const [reverseMode, setReverseMode] = React.useState(false);

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

  const toggleReverseMode = () => {
    setReverseMode(!reverseMode);
  }

  return (
    <Wrapper>
      <Background
        status={status}
        paused={paused}
        reverseMode={reverseMode}
        longWork={!!(reversePomodoros && reversePomodoros % 4 === 0)}
        longChill={!!(pomodoros && pomodoros % 4 === 0)}
      />
      <Logo />
      <AutoPlayContext.Provider value={autoPlay}>
        <EnableSoundsContext.Provider value={enableSounds}>
          <ReverseModeContext.Provider value={reverseMode} >
            <ReversePomodorosContext.Provider value={reversePomodoros}>
              <PomodorosContext.Provider value={pomodoros} >
                <StatusContext.Provider value={status}>
                  <PausedContext.Provider value={paused}>
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
                      toggleAutoPlay={() => toggleAutoPlay()}
                      toggleEnableSounds={() => toggleEnableSounds()}
                      toggleReverseMode={() => toggleReverseMode()}
                    />
                    <PomodoroContainer>
                      {!reverseMode ?
                        <MainTimer
                          chillTime={startChillTime}
                          shortWorkTime={startShortWorkTime}
                          longWorkTime={startLongWorkTime}
                          setStatus={setStatus}
                          setPaused={setPaused}
                          setReversePomodoros={setReversePomodoros}
                          increaseTotalChillingTime={increaseTotalChillingTime}
                          increaseTotalWorkingTime={increaseTotalWorkingTime}
                        /> :
                        <MainTimer
                          chillTime={startChillTime}
                          shortWorkTime={startShortWorkTime}
                          longWorkTime={startLongWorkTime}
                          setStatus={setStatus}
                          setPaused={setPaused}
                          setPomodoros={setPomodoros}
                          increaseTotalChillingTime={increaseTotalChillingTime}
                          increaseTotalWorkingTime={increaseTotalWorkingTime}
                        />}
                      <Counters
                        totalChillingTime={totalChillingTime}
                        totalWorkingTime={totalWorkingTime}
                      />
                    </PomodoroContainer>
                  </PausedContext.Provider>
                </StatusContext.Provider>
              </PomodorosContext.Provider>
            </ReversePomodorosContext.Provider>
          </ReverseModeContext.Provider>
        </EnableSoundsContext.Provider>
      </AutoPlayContext.Provider>
      <Footer />
    </Wrapper >
  );
}

export default App;
