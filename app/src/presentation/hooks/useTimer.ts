import { useEffect, useRef } from "react";

type ClearTimeFn = (id: number | undefined) => void;
type RunTimerFn = (handler: () => void, timeout: number) => number;

const createUseTimer =
  (clear: ClearTimeFn, runTimer: RunTimerFn) =>
  (callback: () => void, delay: number): void => {
    const timerRef = useRef<number>();

    useEffect(() => {
      const stop = () => clear(timerRef.current);

      stop();

      timerRef.current = runTimer(callback, delay);

      return stop;
    }, [delay]);
  };

export const useInterval = createUseTimer(clearInterval, setInterval);

export const useTimeout = createUseTimer(clearTimeout, setTimeout);
