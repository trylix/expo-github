export interface UserData {
  user: {
    id: string;
    name: string;
    login: string;
    avatarUrl: string;
    email: string;
    bio: string;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };
    repositories: {
      totalCount: number;
    };
  };
}

export interface RepositoryNode {
  node: {
    id: string;
    nameWithOwner: string;
    description: string;
    primaryLanguage: {
      id: string;
      name: string;
      color: string;
    };
    stargazers: {
      totalCount: number;
    };
    url: string;
  };
}

export interface RepositoriesData {
  repositoryOwner: {
    repositories: {
      totalCount: number;
      pageInfo: {
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        __typename: string;
      };
      edges: RepositoryNode[];
      __typename: string;
    };
    __typename: string;
  };
}
