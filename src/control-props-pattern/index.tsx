import React from 'react';
import { CounterContext, useCounterContext } from './CounterContext';

export const Counter = ({ value, onChange, children }: any) => {
  //   const [count, setCount] = React.useState<any>(0);

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
      <button
        className='d-flex justify-content-center px-1 mx-auto'
        style={{
          border: '1px solid #3BA1B8',
          borderRadius: '10px',
          backgroundColor: '#ffffff',
        }}
      >
        {children}
      </button>
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

export const Decrement = ({ icon }: any) => {
  const { setCount, minCount, globalCount } = useCounterContext();
  const handleArithematic = () => {
    if (globalCount > minCount) setCount((prev: number) => prev - 1);
  };
  if (icon === 'minus')
    return (
      <div
        className='p-2'
        style={{ color: '#3BA1B8' }}
        onClick={handleArithematic}
      >
        -
      </div>
    );
  else throw Error('please pass valid props...');
};

export const Increment = ({ icon }: any) => {
  const { setCount, maxCount, globalCount } = useCounterContext();
  const handleArithematic = () => {
    if (globalCount < maxCount) setCount((prev: number) => prev + 1);
  };

  if (icon === 'plus')
    return (
      <div
        className='p-2'
        style={{ color: '#3BA1B8' }}
        onClick={handleArithematic}
      >
        +
      </div>
    );
  else throw Error('please pass valid props...');
};

export const Count = ({ max }: any) => {
  const { globalCount, setMaxCount } = useCounterContext();
  React.useEffect(() => {
    setMaxCount(max);
  }, []);
  return (
    <div
      className='p-2'
      style={{ backgroundColor: '#3BA1B8', color: '#ffffff' }}
    >
      {globalCount}
    </div>
  );
};
