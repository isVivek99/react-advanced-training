import React from 'react';
import Accordian, {
  AccordianItem,
  AccordianToggle,
  AccordianPanel,
} from '../../compound-components-pattern/Accordian';

const PageOne = () => {
  return (
    <div>
      PageOne
      <Accordian>
        <AccordianItem>
          <AccordianPanel>item one </AccordianPanel>
          <AccordianToggle>toggle item</AccordianToggle>
        </AccordianItem>
      </Accordian>
    </div>
  );
};

export default PageOne;
