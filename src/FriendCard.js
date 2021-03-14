import React from 'react';
// import { Avatar, Card, Button} from 'antd';
import { makeStyles} from '@material-ui/core/styles';
import { Card, CardActions, Button, Divider} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import { Link } from 'react-router-dom';
export { FriendCard }
  
const PRIMARYCOLOR = "#6360FF";
const SECONDARYCOLOR = "#FF8181"


  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      padding: '2vh',
    },
    avatar: {
        padding: '5vh'
    },
    username: {
        padding: '10px',
        marginLeft: '5vh'
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
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
    }
  }));

const complimentHandler = function() {
    axios.get('http://insultgenerator.apiblueprint.org/compliments')
        .then((response) => {
            console.log(response[0].compliments[0]);
        });
}

function FriendCard() {

    const styles = useStyles();

    return(
        <div>
            <Card className={styles.root}>
                <CardMedia
                    className={styles.avatar}
                    image="/images/profile-pic.png"
                    title="Live from space album cover"
                />
                <div className="userName" styles={styles.username}>
                    <h1>Luis</h1>
                </div>
                <CardActions className={styles.actions}>
                    <Button size="medium" variant="contained" styles={{color: PRIMARYCOLOR}} onClick={complimentHandler}>
                        Compliment
                    </Button>
                    <Divider/>
                    <Link to="/video">
                        <Button size="medium" variant="contained" styles={{color: SECONDARYCOLOR}}>
                                Call
                        </Button>
                    </Link>
                </CardActions> 
            </Card>
        </div>
    )
}