import { useState, useEffect, useRef } from 'react';

// Custom hook for throttling
function useThrottle(callback, delay) {
  const [ready, setReady] = useState(true);
  const callbackRef = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (!ready) return;

    const timer = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timer);
  }, [ready, delay]);

  return (...args) => {
    if (!ready) return;

    setReady(false);
    callbackRef.current(...args);
  };
}
