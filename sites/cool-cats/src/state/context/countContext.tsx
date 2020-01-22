import React, { createContext } from 'react';
import { useHook, ContextValue } from './rootContext';

const CountContext = createContext(null);

const useCount = () => {
  const [count, setCount] = useHook<number>(CountContext);
  const increment = () => setCount(c => c + 1);
  return { count, setCount, increment };
};

const CountProvider = (props: any) => {
  // initial state
  const value = ContextValue<number>(5);
  return <CountContext.Provider value={value} {...props} />;
};

export { CountProvider, useCount };
