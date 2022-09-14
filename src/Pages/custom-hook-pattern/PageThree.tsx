import React from 'react';
import {
  Counter,
  Label,
  Decrement,
  Increment,
  Count,
} from '../../custom-hook-pattern/index';

import { useCounter } from '../../custom-hook-pattern/useCounter';
const PageThree = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  const MAX_COUNT = 10;
  console.log(count);

  const handleClickIncrement = () => {
    //Put your custom logic

    if (count < MAX_COUNT) {
      handleIncrement();
    }
  };

  return (
    <div>
      <div className=''>
        <div className=''>
          <Counter value={count}>
            <Decrement
              icon={'minus'}
              onClick={handleDecrement}
              disabled={count === 0}
            />
            <Label>Counter</Label>
            <Count max={10} />
            <Increment
              icon='plus'
              onClick={handleClickIncrement}
              disabled={count === MAX_COUNT}
            />
          </Counter>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
