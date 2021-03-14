import './App.css';
import Feed from './views/Feed.js'
import Login from './Login.js';
import Profile from './Profile.js';
import Messages from './Messages.js';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'
import { useEffect } from 'react';
// import users from './usersJSON.json'
// import Feed from './views/Feed.js'
import Room from './routes/Room.js';
import CreateRoom from './routes/CreateRoom.js';
import VideoChatContainer from './VideoChatContainer.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      {/* <VideoChatContainer/> */}
        <Router>
          <Switch>
            {/* <Route path="/video" component={Video} */}
            <Route path="/video" component={VideoChatContainer}/>
            <Route path="/room/:roomID" component={Room} />
            <Route path="/" exact component={Login}/>
            <Route path="/feed" component={Feed}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={Messages}/>
          </Switch>
        </Router>
      </header>

    </div>
    
  );
}

export default App;
