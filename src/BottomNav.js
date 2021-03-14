import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ForumIcon from '@material-ui/icons/Forum';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 1,
    right: 1
  },
});

export default function BottomNav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >  
      <BottomNavigationAction label="Home" value="feed" icon={<HomeIcon />} component={Link} to='/feed'/>
      <BottomNavigationAction 
        label="Profile" value="profile" icon={<AccountBoxRoundedIcon />} component={Link} to='/profile'/>
      <BottomNavigationAction 
        label="Messages" value="messages" icon={<ForumIcon />} component={Link} to='/messages'/>
    </BottomNavigation>
  );
}