import React from 'react';

import { element } from 'prop-types';

const DefaultLayout: React.FC = ({ children }) => {
  return <>{children}</>;
};

DefaultLayout.propTypes = {
  children: element.isRequired,
};

export default DefaultLayout;
