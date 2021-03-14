import './App.css';
import { FriendCard } from './FriendCard.js';
import Login from './Login.js';
import Profile from './Profile';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'
// import users from './usersJSON.json'
// import Feed from './views/Feed.js'
import BottomNav from './BottomNav.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/feed" component={FriendCard}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </Router>
      </header>

    </div>
    
  );
}

export default App;
