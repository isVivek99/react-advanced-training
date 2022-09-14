import React from 'react';
import { CounterContext, useCounterContext } from './CounterContext';

export const Counter = ({ value, onChange, children }: any) => {
  const [maxCount, setMaxCount] = React.useState<any>(100);
  const [minCount, setMinCount] = React.useState<any>(0);

  const valueContext = {
    globalCount: value,
    maxCount,
    minCount,
    setCount: onChange,
    setMinCount,
    setMaxCount,
  };
  return (
    <CounterContext.Provider value={valueContext}>
      <div
        className='d-flex justify-content-center px-1 mx-auto'
        style={{
          border: '1px solid #3BA1B8',
          borderRadius: '10px',
          backgroundColor: '#ffffff',
          width: '160px',
        }}
      >
        {children}
      </div>
    </CounterContext.Provider>
  );
};
export const Label = ({ children }: any) => {
  return (
    <div>
      <label
        className='p-2'
        style={{ backgroundColor: '#ebebeb' }}
        htmlFor='counter'
      >
        {children}
      </label>
    </div>
  );
};

export const Decrement = ({ icon, onClick }: any) => {
  if (icon === 'minus')
    return (
      <button
        className='p-2'
        style={{ color: '#3BA1B8', border: 'none' }}
        onClick={onClick}
      >
        -
      </button>
    );
  else throw Error('please pass valid props...');
};

export const Increment = ({ icon, onClick }: any) => {
  if (icon === 'plus')
    return (
      <button
        className='p-2'
        style={{ color: '#3BA1B8', border: 'none' }}
        onClick={onClick}
      >
        +
      </button>
    );
  else throw Error('please pass valid props...');
};

export const Count = ({ count }: any) => {
  const { globalCount, setMaxCount } = useCounterContext();

  return (
    <div
      className='p-2'
      style={{ backgroundColor: '#3BA1B8', color: '#ffffff' }}
    >
      {count}
    </div>
  );
};
