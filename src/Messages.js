import React from 'react';
import './profile.css';
import BottomNav from './BottomNav';
import Card from '@material-ui/core/Card';
import { Box, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// fetch something hehehehe

const msgs = [
    {
        sender: "bob",
        message: "You are the greatest!"
    },
    {
        sender: "jesus",
        message: "you can do anything you set your mind to!"
    },
    {
        sender: "sarah",
        message: "go team!"
    },
]

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      padding: '2vh',
    },
    topBox: {
        // display: "center",
        paddingTop: "30px",
    },
    bottomBox: {
        marginBottom: "100px"
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
    }
  }));

function Messages() {

    const styles = useStyles();

    return (
        <div>
        <Box className={styles.topBox}/>
        <Grid 
            container
            direction="column"
            spacing={2}
            alignItems="center"
            styles={styles.container}
        >
            {msgs.map(msg => {
                return(
                    <Grid item xs={6} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography component="h3" variant="h3">
                                    {msg.message}
                                </Typography>
                                <Typography component="h5" variant="h5">
                                --{msg.sender}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
        
        <Box className={styles.bottomBox}/>
        <BottomNav/>

        </div>
    )
}

export default Messages
