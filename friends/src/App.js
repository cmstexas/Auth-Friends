import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">FriendsList</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        {/* <PrivateRoute path="/anotherRoute" component={SomeOtherComponent} /> */}
      </div>
    </Router>
  );
}

export default App;

