import React from 'react';

import { Container } from './styles';

interface ErrorProps {
  error: {
    graphQLErrors: any[];
  };
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  const message =
    error.graphQLErrors[0]?.type === 'NOT_FOUND'
      ? 'Usuário não encontrado.'
      : 'Oops! Algo deu errado, tente novamente.';

  return (
    <Container>
      <h3 className="error">{message}</h3>
    </Container>
  );
};

export default Error;
