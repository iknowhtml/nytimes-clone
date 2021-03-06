import React from 'react';
import styled from '@emotion/styled';

const StockTickerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > div:first-of-type {
    margin-right: 10px;
  }
`;

const ArrowIcon = () => (
  <svg width="5px" height="9px" viewBox="0 0 5 9">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <g>
          <path d="M2.5,9 L2.5,3.373" id="Shape" stroke="green"></path>
          <polyline
            fill="green"
            fillRule="nonzero"
            points="4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"
          ></polyline>
        </g>
      </g>
    </g>
  </svg>
);

const TickerPercentage = styled.small`
  color: green;
`;

const StockTicker = () => (
  <StockTickerContainer>
    <div>S&amp;P 500</div>
    <TickerPercentage>+5.00%</TickerPercentage>
    <ArrowIcon />
  </StockTickerContainer>
);

export default StockTicker;
