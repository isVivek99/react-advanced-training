import React from 'react';
export const useCounter = (localCount: number) => {
  const [count, setCount] = React.useState(localCount);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return { count, handleDecrement, handleIncrement };
};
