import React from 'react';
import styled from '@emotion/styled';
import { useSideBarNavigationState } from '../Contexts/SideBarNavigationContext';

const Navigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: 0 0 10px #757575;
`;

const SideBarNavigation = () => {
  const [, toggleSideBarNavigationState] = useSideBarNavigationState();
  return (
    <Navigation>
      <button onClick={toggleSideBarNavigationState}>Close</button>
    </Navigation>
  );
};

export default SideBarNavigation;
