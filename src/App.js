import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import PostContent from './components/posts/PostContent';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatePost from './components/posts/CreatePost';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/post/:id' component={PostContent} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreatePost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
