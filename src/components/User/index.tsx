import React, { useContext } from 'react';

import useUserQuery from '~/hooks/useUserHooks';

import Loading from '~/components/Loading';
import Repositories from '~/components/Repositories';
import UserContext from '~/providers/user';
import { UserData } from '~/types';

import {
  Container,
  Header,
  UserAvatar,
  UserStats,
  StatsItem,
  UserInfo,
} from './styles';

interface ApolloQuery {
  fetchMoreResult: UserData;
}

const User: React.FC = () => {
  const { login } = useContext(UserContext);

  const { loading, error, data } = useUserQuery(login || '');

  if (!login) return <></>;

  if (loading) return <Loading />;

  if (error) return <h1>{`Error! ${error.message}`}</h1>;

  const { user }: UserData = data;

  return (
    <Container key={user.id}>
      <Header>
        <UserAvatar>
          <img className="avatar" src={user.avatarUrl} alt={user.name} />
        </UserAvatar>
        <UserInfo>
          <h3 className="name">{user.name}</h3>
          <span className="login">{user.login}</span>
          <p className="bio">{user.bio}</p>
        </UserInfo>
        <UserStats>
          <StatsItem>
            <span className="item">Repositórios</span>
            <span className="amount">{user.repositories.totalCount}</span>
          </StatsItem>
          <StatsItem>
            <span className="item">Seguidores</span>
            <span className="amount">{user.followers.totalCount}</span>
          </StatsItem>
          <StatsItem>
            <span className="item">Seguindo</span>
            <span className="amount">{user.following.totalCount}</span>
          </StatsItem>
        </UserStats>
      </Header>
      <Repositories />
    </Container>
  );
};

export default User;
