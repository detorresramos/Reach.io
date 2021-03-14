import React, {useState} from 'react';
import './profile.css';
import BottomNav from './BottomNav';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// import MuiAlert from '@material-ui/lab/Alert';

// function handleSubmit() {
//     const inviteUser = this.state.invitee;
//     // Make a post req to add :)
//     // Add a snackbar
//     setOpen(true);
// }

// const handleInputChange = e => {
//     setValue(e.target.value)
// }

// const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
// };
// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
function Profile() {
    const [value, setValue] = useState('');
    // const [open, setOpen] = useState(false);
    const [open, setOpen] = useState(false);

    function handleSubmit() {
        const inviteUser = value;
        // Make a post req to add :)
        // Add a snackbar
        setOpen(true);
    }
    
    const handleInputChange = e => {
        setValue(e.target.value)
    }
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    return (
        <div class="profile">
            <div class="profile-header">
                <img src="/images/profile-icon.png" />
                <p class="username">{localStorage.getItem("name")}</p>
            </div>
            <div class="settings">
                {/* <h2>invite friends!</h2> */}
                <form onSubmit={handleSubmit}>
                    <label>
                        Invite friends!
                        <input type="text" value={value} onChange={handleInputChange} />
                    </label>
                    <input type="submit" value="Invite" />
                </form>
                <p>Account Security</p>
                <p>Notification Settings</p>
                <p>Wellness Tips</p>
                <p>Sign Out</p>
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                    }
                />
            </div>
            <BottomNav/>
        </div>
    )
}

export default Profile
