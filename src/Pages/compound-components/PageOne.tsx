import React from 'react';
import Accordian, {
  AccordianItem,
  AccordianToggle,
  AccordianPanel,
} from '../../compound-components-pattern/Accordian';

const PageOne = () => {
  return (
    <div>
      <br />
      <Accordian>
        <AccordianItem id='1'>
          <AccordianToggle>toggle item one</AccordianToggle>
          <AccordianPanel>item one content</AccordianPanel>
        </AccordianItem>
      </Accordian>
      {/*  */}
      <br />
      <Accordian>
        <AccordianItem id='2'>
          <AccordianToggle>toggle item two</AccordianToggle>
          <AccordianPanel>item two cotent</AccordianPanel>
        </AccordianItem>
      </Accordian>
    </div>
  );
};

export default PageOne;
