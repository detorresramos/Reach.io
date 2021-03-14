import React from 'react';
// import { Avatar, Card, Button} from 'antd';
import { makeStyles} from '@material-ui/core/styles';
import { Card, CardActions, Button} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
export { FriendCard }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: '2vh',
      boxShadow: '5px 5px 5px #9E9E9E'
    },
    avatar: {
        padding: '5vh'
    },
    username: {
        padding: '10px',
        marginLeft: '10px'
    },
    headerArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionArea: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'        
    }
  }));

const complimentHandler = function() {
    axios.get('http://insultgenerator.apiblueprint.org/compliments')
        .then((response) => {
            // response = response[0].compliments;
            console.log(response[0].compliments[0]);
        });
}

function FriendCard(props) {

    const styles = useStyles();

    return(
        <div>
            <Card className={styles.root}>
                <span styles={styles.headerArea}>
                    <CardMedia
                        className={styles.avatar}
                        image="/images/profile-pic.png"
                        title="Live from space album cover"
                    />
                    <div className="userName" styles={styles.username}>
                        <h1>Luis</h1>
                    </div>
                </span>
                <span styles={styles.actionArea}>
                    <CardActions className={styles.actions}>
                        <Button size="small" color="primary" onClick={complimentHandler}>
                            Compliment
                        </Button>
                        <Button size="small" color="primary">
                            Call
                        </Button>
                    </CardActions> 
                </span>
            </Card>
        </div>
    )
}