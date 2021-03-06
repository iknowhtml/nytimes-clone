import React from 'react';
import styled from '@emotion/styled';

import WeatherIcon from './WeatherIcon';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  & > * {
    margin: 0 0.25rem;
  }
`;

const Weather = () => (
  <Container aria-hidden="true">
    <WeatherIcon />
    <strong>
      <span />
      32°F
    </strong>
    <small>
      <span />
      42°F
    </small>
    <small>
      <span />
      24°F
    </small>
  </Container>
);

export default Weather;
