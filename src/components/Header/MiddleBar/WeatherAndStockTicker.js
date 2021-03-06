import React from 'react';
import styled from '@emotion/styled';

import Weather from './Weather';
import StockTicker from './StockTicker';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1rem 0.5rem;
`;

const WeatherAndStockTicker = () => (
  <Container>
    <span aria-label="Today is sunny. The current temperature is 32°F. The high is 42°F and the low is 24°F." />
    <Weather aria-hidden="true" />
    <span aria-label="The S&P 500 is up 5.00%" />
    <StockTicker aria-hidden="true" />
  </Container>
);

export default WeatherAndStockTicker;
