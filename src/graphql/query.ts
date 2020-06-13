import { gql } from 'apollo-boost';

const userFieldsQuery = gql`
  fragment userFields on User {
    id
    name
    avatarUrl
    email
    bio
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories {
      totalCount
    }
  }
`;

const repositoryFieldsQuery = gql`
  fragment repositoryFields on Repository {
    id
    nameWithOwner
    primaryLanguage {
      id
      name
      color
    }
    stargazers {
      totalCount
    }
    url
  }
`;

export const GET_USER_DETAILS = gql`
  query GetUserDetails($login: String!) {
    user(login: $login) {
      ...userFields
    }
  }
  ${userFieldsQuery}
`;

export const GET_USER_REPOSITORIES = gql`
  query GetUserRepositories($login: String!, $cursor: String) {
    repositoryOwner(login: $login) {
      repositories(
        first: 5
        after: $cursor
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            ...repositoryFields
          }
        }
      }
    }
  }
  ${repositoryFieldsQuery}
`;
