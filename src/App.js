import './App.css';
import { FriendCard } from './FriendCard.js';
import Login from './Login.js';
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
        <Login />
        {/* <FriendCard /> */}


      </header>
    </div>
  );
}

export default App;
