import React from 'react';
import { useCounter } from '../../props-getters-pattern/useCounter';
import {
  Counter,
  Label,
  Decrement,
  Increment,
  Count,
} from '../../props-getters-pattern/index';
const MAX_COUNT = 10;

const PageFour = () => {
  const { count, getCounterProps, getIncrementProps, getDecrementProps } =
    useCounter({
      initialCount: 0,
      maxCount: MAX_COUNT,
    });

  return (
    <div>
      <Counter {...getCounterProps()}>
        <Decrement {...getDecrementProps({ icon: 'minus' })} />
        <Label>Counter</Label>
        <Count count={count} />
        <Increment {...getIncrementProps({ icon: 'plus' })} />
      </Counter>
    </div>
  );
};

export default PageFour;
