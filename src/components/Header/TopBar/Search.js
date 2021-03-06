import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from './Button';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  margin-left: 5px;
`;

const TextInput = styled.input`
  display: inline;
  color: #757575;
  border-color: 1px solid #757575;
  font-size: 0.8rem;
  height: 35px;
  padding: 1px 40px 0px 10px;
  width: 200px;
`;

const SubmitButton = styled.button`
  color: white;
  background-color: #567b95;
  border-radius: 3px;
  font-size: 0.75rem;
  height: 40px;
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  border-style: none;
  margin-left: 5px;
`;

const Search = () => {
  const [isSearchBarVisible, setSearchVisible] = useState(false);

  const toggleSearchBarVisibility = event => {
    event.preventDefault;
    setSearchVisible(!isSearchBarVisible);
  };

  const SearchIcon = () => (
    <svg height="16" width="16" viewBox="0 0 16 16">
      <path
        fill="#333"
        d="M11.3,9.2C11.7,8.4,12,7.5,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1,0,1.9-0.3,2.7-0.7l3.3,3.3c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L11.3,9.2zM6.5,10.3c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C10.3,8.6,8.6,10.3,6.5,10.3z"
      ></path>
    </svg>
  );

  return (
    <Container>
      <Button
        id="search-button"
        aria-label="Toggle Search Bar"
        onClick={toggleSearchBarVisibility}
      >
        <SearchIcon />
      </Button>
      {isSearchBarVisible && (
        <Form>
          <TextInput placeholder="SEARCH" />
          <SubmitButton>Go</SubmitButton>
        </Form>
      )}
    </Container>
  );
};

export default Search;
