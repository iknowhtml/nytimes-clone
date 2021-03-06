import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { useSideBarNavigationState } from '../Contexts/SideBarNavigationContext';

import SideBarNavigation from './SideBarNavigation';
import TopBar from './TopBar';
import MiddleBar from './MiddleBar';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => {
  const [isSideBarNavigationOpen] = useSideBarNavigationState();

  return (
    <header>
      {isSideBarNavigationOpen ? <SideBarNavigation /> : null}
      <TopBar />
      <MiddleBar />
    </header>
  );
};

export default Header;
