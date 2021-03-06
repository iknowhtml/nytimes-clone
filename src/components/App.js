import React from 'react';

import GlobalStyles from './GlobalStyles';

import { SideBarNavigationProvider } from './Contexts/SideBarNavigationContext';

import Header from './Header';

const App = () => (
  <>
    <GlobalStyles />
    <SideBarNavigationProvider>
      <Header />
    </SideBarNavigationProvider>
    <main></main>
  </>
);

export default App;
