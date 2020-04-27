import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './routes/Home'
import {Books} from './routes/Books'
import {About} from './routes/About'
import {NoMatch} from './routes/NoMatch'
import {Layout} from './components/Layout'
import {NavigationBar, NavigationOption} from './components/NavigationBar'


function App() {
  return (
  <React.Fragment>j
    <NavigationBar brand="Francisco Javier Juan Sánchez">
      <NavigationOption label="Home" href="/" route={Home} />
      <NavigationOption label="Books" href="/books" route={Home} />
      <NavigationOption label="About" href="/about" route={Home} />
    </NavigationBar>
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Layout>
  </React.Fragment>
  );
}

export default App;
