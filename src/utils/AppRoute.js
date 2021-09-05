import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...componentProps
}) => {

  return (
    <Route
      render={() => (
        <Layout>
          <Component {...componentProps} />
        </Layout>
      )} />
  );
}

export default AppRoute;