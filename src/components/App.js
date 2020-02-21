import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/home';
import { SearchPage } from './pages/search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          {/* <Route path="/team" component={TeamPage} />
          <Route path="/styleguide" component={StylesPage} />
          <Route path="/personal-info" component={PersonalPage} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;