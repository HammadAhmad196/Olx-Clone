import React from 'react'
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AdDetails from "../pages/AdDetails/AdDetails";
import Register from "../pages/SignUp/Register";
import Search from "../pages/Search/Search";
import Category from "../pages/Category/Category";
import MyAds from "../pages/MyAds/MyAds";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Pagination from '../components/Pagination/Pagination';
import Show from '../pages/AdDetails/Show';
import PrivateRoutes from '../Routes/PrivateRoutes/PrivateRoutes';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <PrivateRoutes path="/show" Component={Show}
            />
            <Route path="/register" component={Register} exact></Route>
            <Route path="/ad/:id" component={AdDetails} exact></Route>
            <Route path="/ad/:id?" Component={AdDetails} exact />
            <Route path="/myads" component={MyAds} exact></Route>
            <Route path="/:cat" component={Category} exact></Route>
            <Route path="/search/:keyword" component={Search} exact />
            <Route path="/pagination" component={Pagination} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
