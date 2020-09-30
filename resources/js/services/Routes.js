import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from '../Pages/index';


const Main = props => (

<Switch>
  {/*User might LogIn*/}
  <Route exact path='/' component={Home}/>

  {/*User will LogIn*/}
  {/* <Route path='/Verification/:vid' component={Verification}/>
  <Route path='/login' component={Home}/>
  <Route path='/register' component={UserRegistration}/>

  <Route path='/ChangePassword' component={ChangePassword}/>

  <Route path='/Dashboard' component={BottomNavigation}/>
  <Route path='/Scanner' component={BottomNavigation}/>
  <Route path='/Locations' component={BottomNavigation}/>
  <Route path='/Relations' component={Relations}/> */}

  
  {/* User is LoggedIn*/}
  {/* <PrivateRoute path='/dashboard' component={Dashboard}/> */}
  {/*Page Not Found*/}
  {/* component={notfound404} */}
  <Route />
</Switch>
);
export default Main;