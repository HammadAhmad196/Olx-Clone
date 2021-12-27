import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const userLogin = useSelector(state => state.userLogin.userInfo);
  // const [isAuthenticated] = useState(userLogin);

  // console.log("details", userLogin?.uid)

  return (
    <Route {...rest} render={props => (
      userLogin?.uid
        ?
        (
          <Component key={props.match.params.id || 'empty'} {...props} />
        )
        :
        (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    )} />
  )
}

export default PrivateRoute;










// const dispatch = useDispatch();

// const addDetails = useSelector(state => state.addDetails);
// const [isAuthenticated, setIsAuthenticated] = useState(addDetails);

// useEffect(() => {
//   dispatch(listAdDetails());
// }, [dispatch]);

// useEffect(() => {
//   setIsAuthenticated(addDetails);
// }, [addDetails]);

// console.log("details", addDetails)