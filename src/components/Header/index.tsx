import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form } from '@unform/web';

import UserContext from '~/providers/user';

import {
  Nav,
  Container,
  Logo,
  SearchGroup,
  SearchInput,
  SearchButton,
} from './styles';

interface FormProps {
  [key: string]: string;
}

const Header: React.FC = () => {
  const { setLogin } = useContext(UserContext);

  function handleSubmit({ login }: FormProps): void {
    setLogin(login);
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
