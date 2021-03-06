import { useQuery } from '@apollo/react-hooks';
import { GET_USER_DETAILS } from '~/graphql/query';

export default (login: string): any => {
  return useQuery(GET_USER_DETAILS, {
    fetchPolicy: 'network-only',
    variables: {
      login,
    },
  });
};
