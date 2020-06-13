import React from 'react';

import {
  Container,
  Header,
  UserAvatar,
  UserStats,
  StatsItem,
  UserInfo,
  Body,
  Title,
  RepositoryItem,
} from './styles';

const User: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserAvatar>
          <img
            className="avatar"
            src="https://avatars3.githubusercontent.com/u/16746134?s=460&u=42f9f35afeda788f621c00b6d7757eb8679ff67c&v=4"
            alt="Usuário"
          />
        </UserAvatar>
        <UserInfo>
          <h3 className="name">Brendenson Andrade</h3>
          <span className="login">trylix</span>
          <p className="bio">may the force be with you</p>
        </UserInfo>
        <UserStats>
          <StatsItem>
            <span className="item">Repositórios</span>
            <span className="amount">50</span>
          </StatsItem>
          <StatsItem>
            <span className="item">Seguidores</span>
            <span className="amount">50</span>
          </StatsItem>
          <StatsItem>
            <span className="item">Seguindo</span>
            <span className="amount">50</span>
          </StatsItem>
        </UserStats>
      </Header>
      <Body>
        <Title>Repositórios</Title>
        <ul className="repositories">
          <RepositoryItem>
            <a className="item" href="/#">
              <span className="name">trylix/nubank-clone</span>
              <span className="description">
                Clone do aplicativo da NuBank para Android desenvolvido com
                Flutter
              </span>
            </a>
          </RepositoryItem>
          <RepositoryItem>
            <a className="item" href="/#">
              <span className="name">trylix/nubank-clone</span>
              <span className="description">
                Clone do aplicativo da NuBank para Android desenvolvido com
                Flutter
              </span>
            </a>
          </RepositoryItem>
        </ul>
      </Body>
    </Container>
  );
};

export default User;
