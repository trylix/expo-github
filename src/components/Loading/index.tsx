import React from 'react';

import { Container, Spinner } from './styles';

interface LoadingProps {
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({ color = '#5652bf' }) => {
  return (
    <Container>
      <Spinner viewBox="0 0 50 50" color={color}>
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </Spinner>
    </Container>
  );
};

export default Loading;
