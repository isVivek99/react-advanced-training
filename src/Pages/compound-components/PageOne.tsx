import React from 'react';
import Accordian, {
  AccordianItem,
  AccordianToggle,
  AccordianPanel,
} from '../../compound-components-pattern/Accordian';

import {
  Counter,
  Label,
  Decrement,
  Increment,
  Count,
} from '../../compound-components-pattern/Counter';

const PageOne = () => {
  return (
    <div>
      <div className=''>
        <Counter>
          <Decrement icon='minus' />
          <Label>Counter</Label>
          <Count max={10} />
          <Increment icon='plus' />
        </Counter>
      </div>
    </div>
  );
};

export default PageOne;
