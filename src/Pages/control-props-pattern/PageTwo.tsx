import React from 'react';
import {
  Counter,
  Label,
  Decrement,
  Increment,
  Count,
} from '../../control-props-pattern/index';

const PageTwo = () => {
  const [count, setCount] = React.useState(0);

  const handleChangeCounter = (newCount: number) => {
    setCount(newCount);
  };
  return (
    <div>
      <div className=''>
        <Counter value={count} onChange={handleChangeCounter}>
          <Decrement icon='minus' />
          <Label>Counter</Label>
          <Count max={10} />
          <Increment icon='plus' />
        </Counter>
      </div>
    </div>
  );
};

export default PageTwo;
