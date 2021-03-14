import logo from './logo.svg';
import './App.css';
import { FriendCard } from './FriendCard.js';
import LoginPage from './LoginPage.js';

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'
// import users from './usersJSON.json'
// import Feed from './views/Feed.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginPage />
        <FriendCard />


      </header>
    </div>
  );
}

export default App;
