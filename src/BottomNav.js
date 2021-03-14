import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function BottomNav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="feed" icon={<HomeIcon />} />
      <BottomNavigationAction label="Profile" value="profile" icon={<AccountBoxRoundedIcon />} />
    </BottomNavigation>
  );
}