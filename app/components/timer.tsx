import * as React from "react";
import { Controls } from "./controls";
import { Metadata } from "next";

export function Timer({ duration, type }: { duration: number,type:string }) {
  const [time, setTime] = React.useState(duration * 60);
  const [int, setInt]: any = React.useState(null);
  const [running, setRunning] = React.useState(false);
  const initial = duration;

  const tick = () => {
    setTime((time) => time - 1);
  };

  const stopInterval = () => {
    clearInterval(int);
    setInt(null);
  };
  const start = () => {
    setRunning(true);
    setInt(setInterval(tick, 1000));
    setTime(time > 0 ? time : initial * 60);
  };
  const reset = () => {
    stopInterval();
    setTime(initial * 60);
    setRunning(false);
  };
  const pause = () => {
    int ? stopInterval() : start();
  };
  const getStatus = (): string | undefined => {
    if (time === 0) return "Finished";
    if (running && !int) return "Paused";
    if (running) return "Running";
  };
  const addZero = (num: number) => {
    return num > 9 ? num : `0${num}`;
  };
  const formatTime = (time: number) => {
    const minutes = addZero(Math.floor(time / 60));
    const seconds = addZero(Math.floor(time % 60));

    return `${minutes}:${seconds}`;
  };
  React.useEffect(() => {
    if (time === 0) {
      stopInterval();
      setRunning(false);
      setTime(0);
    }
    document.title=`${type} - ${formatTime(time)}`
  }, [time]);
  return (
    <div>
      <div>{formatTime(time)}</div>
      <div>
        <Controls
          start={start}
          pause={pause}
          reset={reset}
          status={getStatus()}
        />
      </div>
    </div>
  );
}
