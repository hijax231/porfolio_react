import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Main from '../services/Routes';
class Index extends Component {
  render() {
    return (
      
      <BrowserRouter>
    
        <Route component={Main} />
        {/* <Footer/> */}
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('appindex'));