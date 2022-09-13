import React, { useContext } from 'react';

interface AppContextInterface {
  activePanel: string;
  handlePanelActive: any;
}

const AccordianContextDefaultvalue = {
  activePanel: '',
  handlePanelActive: '',
};
export const AccordianContext = React.createContext<AppContextInterface>(
  AccordianContextDefaultvalue
);

const AccordianItemContextDefaultValue = {
  id: '',
};
export const AccordianItemContext = React.createContext(
  AccordianItemContextDefaultValue
);

export function useAccordian() {
  const context = useContext(AccordianContext);
  if (context === undefined) {
    throw new Error('useAccordian must be used with a <Accordian/>');
  }
  return context;
}

export function useAccordianItem() {
  const context = useContext(AccordianItemContext);
  if (context === undefined) {
    throw new Error('useAccordian must be used with a <AccordianItem/>');
  }
  return context;
}

/**
 * create conext gives:
 * AccordianContext.Provider
 * AccordianContext.Consumer
 */
