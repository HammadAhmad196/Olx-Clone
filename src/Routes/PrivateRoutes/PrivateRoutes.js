// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect
// } from "react-router-dom";

// // import store from '../../store/store';

// export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {

//   // const isAuthenticated = !!store.getState().user;
//   // console.log("isAuthenticated", isAuthenticated)

//   return (
//     <Route {...rest} render={props => (
//       isAuthenticated
//         ?
//         (
//           <Component key={props.match.params.id || 'empty'} {...props} />
//         )
//         :
//         (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
//     )} />
//   );
// }
// export default PrivateRoute;



















import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoutes({ component: Component, isAuthenticated, ...rest }) {
  if (isAuthenticated === true) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  return <Redirect push to="login" />;
}

export default PrivateRoutes;