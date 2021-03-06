import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

import Button from './Button';
import Search from './Search';
import { useSideBarNavigationState } from '../../Contexts/SideBarNavigationContext';

const Container = styled.div`
  display: grid;
  margin-top: 0.75rem;
  grid-template-columns: 2fr 1fr;
  column-gap: 40%;
`;

const NavigationSearchContainer = styled.div`
  display: flex;
`;

const ButtonLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: #567b95;
  border-radius: 3px;
  font-size: 0.8rem;
  padding: 0.5rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  &:hover,
  :focus {
    background-color: #326891;
  }
`;

const ButtonLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TopNavigationBar = () => {
  const [, toggleSideBarNavigationState] = useSideBarNavigationState();

  return (
    <Container>
      <NavigationSearchContainer>
        <Button
          id="toggle-side-navigation-button"
          aria-label="Toggle Side Bar Navigation"
          onClick={toggleSideBarNavigationState}
        >
          <svg height="16" width="16" viewBox="0 0 16 16">
            <rect x="1" y="3" fill="#333" width="14" height="2"></rect>
            <rect x="1" y="7" fill="#333" width="14" height="2"></rect>
            <rect x="1" y="11" fill="#333" width="14" height="2"></rect>
          </svg>
        </Button>
        <Search />
      </NavigationSearchContainer>
      <ButtonLinksContainer>
        <ButtonLink href="">Subscribe now for $1</ButtonLink>
        <ButtonLink href="">Log in</ButtonLink>
      </ButtonLinksContainer>
    </Container>
  );
};
export default TopNavigationBar;
