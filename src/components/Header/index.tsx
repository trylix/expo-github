import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form } from '@unform/core';

import {
  Nav,
  Container,
  Logo,
  SearchGroup,
  SearchInput,
  SearchButton,
} from './styles';

const Header: React.FC = () => {
  function handleSubmit(data: any): void {
    // TODO: search
  }

  return (
    <Container>
      <Nav>
        <Logo />
      </Nav>
      <Form onSubmit={handleSubmit}>
        <SearchGroup>
          <SearchInput name="login" />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchGroup>
      </Form>
    </Container>
  );
};

export default Header;
