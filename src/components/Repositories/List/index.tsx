import React from 'react';

import Loading from '~/components/Loading';
import { RepositoryNode } from '~/types';

import { RepositoryItem, RepositoryStats, Stars, LoadMore } from './styles';

interface ListProps {
  loading: boolean;
  hasNextPage: boolean;
  entries: RepositoryNode[];
  onLoadMore(): void;
}

const Repositories: React.FC<ListProps> = ({
  loading,
  hasNextPage,
  entries,
  onLoadMore,
}) => {
  return (
    <>
      <ul className="repositories">
        {entries.map(({ node }: RepositoryNode) => (
          <RepositoryItem key={node.id}>
            <a className="item" href={node.url}>
              <span className="name">{node.nameWithOwner}</span>
              <span className="description">{node.description}</span>
              <RepositoryStats>
                {node.stargazers.totalCount > 0 && (
                  <>
                    <Stars />
                    <span className="stars">{node.stargazers.totalCount}</span>
                  </>
                )}
              </RepositoryStats>
            </a>
          </RepositoryItem>
        ))}
      </ul>
      {hasNextPage && (
        <LoadMore onClick={() => onLoadMore()}>
          {loading ? <Loading color="#ffffff" /> : 'Carregar mais'}
        </LoadMore>
      )}
    </>
  );
};

export default Repositories;
