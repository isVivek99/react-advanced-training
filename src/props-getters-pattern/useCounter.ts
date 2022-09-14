import React from 'react';

interface useCounterProps {
  initialCount: number;
  maxCount: number;
}
export const useCounter = ({ initialCount, maxCount }: useCounterProps) => {
  const [count, setCount] = React.useState(initialCount);

  const handleIncrement = () => {
    if (count < maxCount) setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count > initialCount) setCount((prev) => prev - 1);
  };

  const getCounterProps = () => {
    return {
      value: count,
    };
  };
  const getDecrementProps = (overwriteProps: any) => {
    return {
      icon: 'minus',
      onClick: handleDecrement,
      disabled: {},
      ...overwriteProps,
    };
  };
  const getIncrementProps = (overwriteProps: any) => {
    return {
      icon: 'plus',
      onClick: handleIncrement,
      disabled: {},
      ...overwriteProps,
    };
  };

  return {
    count,
    getCounterProps,
    getDecrementProps,
    getIncrementProps,
  };
};
