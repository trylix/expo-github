import { useQuery } from '@apollo/react-hooks';
import { GET_USER_REPOSITORIES } from '~/graphql/query';

export default (login: string): any => {
  return useQuery(GET_USER_REPOSITORIES, {
    fetchPolicy: 'network-only',
    variables: {
      login,
    },
  });
};
