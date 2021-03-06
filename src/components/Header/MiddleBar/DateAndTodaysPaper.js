import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  flex-grow: 1;
  margin: 1rem 0.5rem;
`;

const DateAndTodaysPaper = () => (
  <Container>
    <strong>
      {new Date().toLocaleDateString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        weekday: 'long',
      })}
    </strong>
    <div>Today&apos;s Paper</div>
  </Container>
);

export default DateAndTodaysPaper;
