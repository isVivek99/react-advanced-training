import React, { useState } from 'react';
import {
  AccordianContext,
  AccordianItemContext,
  useAccordian,
  useAccordianItem,
} from './AccordianContext';

type ActivePanel = '0' | '1' | '2';
type handleClickActiveState = React.Dispatch<React.SetStateAction<ActivePanel>>;

export const AccordianToggle = ({ children }: any) => {
  const { handlePanelActive } = useAccordian();
  const { id } = useAccordianItem();

  return (
    <button
      style={{
        width: '100%',
        height: '30px',
        border: '1px solid #ebebeb',
        textAlign: 'left',
        padding: '0px 20px',
      }}
      onClick={() => handlePanelActive(id)}
    >
      {children}
    </button>
  );
};

export const AccordianPanel = ({ children }: any) => {
  const { activePanel } = useAccordian();
  const { id } = useAccordianItem();

  if (id !== activePanel) return null;
  return (
    <div
      style={{
        border: '1px solid #ebebeb',
        padding: ' 20px',
      }}
    >
      {children}
    </div>
  );
};
export const AccordianItem = ({ id, children }: any) => {
  const value = {
    id: id,
  };
  return (
    <AccordianItemContext.Provider value={value}>
      <div>{children}</div>
    </AccordianItemContext.Provider>
  );
};

const Accordian = ({ children }: any) => {
  const [activePanel, setActivePanel] = useState<any>('0');

  const value = {
    activePanel,
    handlePanelActive: setActivePanel,
  };

  return (
    <AccordianContext.Provider value={value}>
      <div>{children}</div>
    </AccordianContext.Provider>
  );
};
export default Accordian;
