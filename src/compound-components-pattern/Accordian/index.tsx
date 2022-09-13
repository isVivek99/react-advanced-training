import React, { useState } from 'react';

export const AccordianToggle = ({ id, handlePanelActive, children }: any) => {
  const handleClick = () => {
    console.log(id, handlePanelActive);
    handlePanelActive(id);
  };
  return (
    <button
      style={{
        width: '100%',
        height: '30px',
        border: '1px solid #ebebeb',
        textAlign: 'left',
        padding: '0px 20px',
      }}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};

export const AccordianPanel = ({ id, activePanel, children }: any) => {
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
export const AccordianItem = ({
  id,
  activePanel,
  handlePanelActive,
  children,
}: any) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          id,
          activePanel,
          handlePanelActive: handlePanelActive,
        });
      })}
    </div>
  );
};

const Accordian = ({ children }: any) => {
  const [activePanel, setActivePanel] = useState(null);

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          activePanel,
          handlePanelActive: setActivePanel,
        });
      })}
    </div>
  );
};
export default Accordian;
