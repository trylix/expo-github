import styled from 'styled-components';

import Input from '~/components/Input';
import { ReactComponent as logoSvg } from '~/assets/images/logo.svg';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const Nav = styled.nav`
  padding: 46px 12px;
`;

export const Logo = styled(logoSvg)``;

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px 40px;
`;

export const SearchInput = styled(Input).attrs({
  type: 'text',
  placeholder: 'Busque por um usuário',
})`
  width: 30vw;
  background: #ffffff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 6px 0px 0px 6px;
  padding: 20px 18px;
  transition: all ease 0.2s;

  &:focus {
    box-shadow: 0 4px 20px 0 rgba(98, 54, 255, 0.32);
  }
`;

export const SearchButton = styled.button.attrs({
  type: 'submit',
})`
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #6235ff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0px 6px 6px 0px;
  padding: 20px 26px;
  transition: all ease 0.2s;

  &:hover {
    background-color: #522de5;
  }
`;
