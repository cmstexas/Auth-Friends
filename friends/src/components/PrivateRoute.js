import React from 'react';
import { Route, Redirect } from 'react-router';
// import { AsyncResource } from 'async_hooks';
// import { notDeepEqual } from 'assert';
// import Login from './Login';

// requirements: R
// 1. It has the same API as `<Route />` - Have the same props
// 2. It renders a <Route /> and passes all the props through to it.
// 3. It checks if the user is authetnicated, if they aren't, it rends the "component" prop. If not, it redirects the user to /Login.

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;

// ({ component, ...rest }) is shorthand for  👇
// const props = {
//   component: {},
//   exact: true,
//   path: '/protected',
//   render: null,
// }

// const component = props.component;
// const rest = {
//   exact: props.exact,
//   path: props.path,
//   render: props.render
// }
