import React from 'react';
import { Route as DomRoute, RouteProps } from 'react-router-dom';
import { element } from 'prop-types';

import DefaultLayout from '~/components/_layouts/default';

const Route: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <DomRoute {...rest}>
      <DefaultLayout>{children}</DefaultLayout>
    </DomRoute>
  );
};

Route.propTypes = {
  children: element.isRequired,
};

export default Route;
