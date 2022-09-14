import React, { useContext } from 'react';

interface CounterContextInterface {
  globalCount: number;
  maxCount: number;
  minCount: number;
  setCount: any;
  setMaxCount: any;
  setMinCount: any;
}
const defaultCountState = {
  globalCount: 0,
  maxCount: 100,
  minCount: 0,
  setCount: () => 1,
  setMaxCount: () => 1,
  setMinCount: () => 1,
};

export const CounterContext =
  React.createContext<CounterContextInterface>(defaultCountState);

export function useCounterContext() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useAccordian must be used with a <Counter />');
  }
  return context;
}
