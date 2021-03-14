import logo from './logo.svg';
import './App.css';
import { FriendCard } from './FriendCard.js';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'
import users from './usersJSON.json'
import Feed from './views/Feed.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Route path="/" exact component={App}/>
          <Route path="/feed" component={Feed}/>
          <Redirect to="/"/>
          {/* <Route path="/about" component={About}/> */}
        </Router>


      </header>
    </div>
  );
}

export default App;
