import React from 'react';
import styled from '@emotion/styled';

import DateAndTodaysPaper from './DateAndTodaysPaper';
import LogoHeader from './LogoHeader';
import WeatherAndStockTicker from './WeatherAndStockTicker';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const MiddleBar = () => (
  <Container>
    <DateAndTodaysPaper />
    <LogoHeader />
    <WeatherAndStockTicker />
  </Container>
);

export default MiddleBar;
