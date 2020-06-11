import React from 'react';
import { element } from 'prop-types';

import Header from '~/components/Header';

import { TopBackground, BottomBackground } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <TopBackground />
      <BottomBackground />
      <Header />
      {children}
    </>
  );
};

DefaultLayout.propTypes = {
  children: element.isRequired,
};

export default DefaultLayout;
