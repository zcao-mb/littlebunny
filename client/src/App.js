import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from './components/shared';
import Home from './components/Home';
import { Schedule } from './components/schedule';
import Test from './components/StoreTest';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/test" component={Test} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
