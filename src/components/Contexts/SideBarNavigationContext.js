import React, { createContext, useState, useContext } from 'react';

const SideBarNavigationContext = createContext([false, () => {}]);

const SideBarNavigationProvider = ({ children }) => {
  const [isSideBarNavigationOpen, setSideBarNavigationState] = useState(false);
  return (
    <SideBarNavigationContext.Provider
      value={[isSideBarNavigationOpen, setSideBarNavigationState]}
    >
      {children}
    </SideBarNavigationContext.Provider>
  );
};

const useSideBarNavigationState = () => {
  const [isSideBarNavigationOpen, setSideBarNavigationState] = useContext(
    SideBarNavigationContext
  );
  const toggleSideBarNavigationState = () =>
    setSideBarNavigationState(isOpen => !isOpen);

  return [isSideBarNavigationOpen, toggleSideBarNavigationState];
};

export { SideBarNavigationProvider, useSideBarNavigationState };
