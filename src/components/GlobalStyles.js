import { Global, css } from '@emotion/react';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: 'Franklin Gothic', Helvetica, sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      #app {
        max-width: 1440px;
        min-width: 1280px;
        margin: 0 auto;
      }
    `}
  />
);

export default GlobalStyles;
