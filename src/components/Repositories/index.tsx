/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';

import useRepositoriesQuery from '~/hooks/useRepositoriesHooks';

import Loading from '~/components/Loading';
import UserContext from '~/providers/user';
import { RepositoriesData } from '~/types';

import List from './List';
import { Body, Title } from './styles';

interface QueryResult {
  fetchMoreResult: RepositoriesData;
}

const Repositories: React.FC = () => {
  const { login } = useContext(UserContext);

  const { loading, data, fetchMore } = useRepositoriesQuery(login || '');

  if (loading) return <Loading />;

  const {
    repositoryOwner: { repositories },
  }: RepositoriesData = data;

  return (
    <Body>
      <Title>Repositórios</Title>
      <List
        loading={loading}
        entries={repositories.edges}
        hasNextPage={repositories.pageInfo.hasNextPage}
        onLoadMore={() => {
          fetchMore({
            variables: {
              login,
              cursor: repositories.pageInfo.endCursor,
            },
            updateQuery: (
              prevResult: RepositoriesData,
              { fetchMoreResult }: QueryResult,
            ) => {
              const newEdges =
                fetchMoreResult.repositoryOwner.repositories.edges;
              const { pageInfo } = fetchMoreResult.repositoryOwner.repositories;

              return newEdges.length
                ? {
                    repositoryOwner: {
                      __typename: prevResult.repositoryOwner.__typename,
                      repositories: {
                        __typename:
                          prevResult.repositoryOwner.repositories.__typename,
                        edges: [
                          ...prevResult.repositoryOwner.repositories.edges,
                          ...newEdges,
                        ],
                        pageInfo,
                      },
                    },
                  }
                : prevResult;
            },
          });
        }}
      />
    </Body>
  );
};

export default Repositories;
