import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
