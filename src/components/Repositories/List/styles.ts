import styled from 'styled-components';

import { ReactComponent as starSvg } from '~/assets/images/star.svg';

export const RepositoryItem = styled.li`
  padding: 16px 22px;
  border-bottom: 0.5px solid rgba(109, 114, 120, 0.2);

  .item {
    display: flex;
    flex-direction: column;

    .name {
      color: #363636;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .description {
      color: #6d7278;
      font-size: 14px;
    }
  }

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const RepositoryStats = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .stars {
    color: #1c1c1c;
    font-size: 12px;
    margin-left: 8px;
  }
`;

export const Stars = styled(starSvg)`
  path {
    fill: #6235ff;
  }
`;

export const LoadMore = styled.button.attrs({
  type: 'button',
})`
  color: #ffffff;
  font-weight: bold;
  background-color: #6235ff;
  padding: 12px 8px;
  transition: all ease 0.2s;

  &:hover {
    background-color: #522de5;
  }
`;
