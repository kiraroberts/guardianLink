import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
