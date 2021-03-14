import { FriendCard } from '../FriendCard.js';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import BottomNav from '../BottomNav.js';
import Questionnaire from '../Questionnaire.js';

const users = [
    {
        "name": "Luis",
        "wellnessScore": 10
    },
    {
        "name": "Paul",
        "wellnessScore": 8
    },
    {
        "name": "Pierre",
        "wellnessScore": 2
    },
    {
        "name": "Drake",
        "wellnessScore": 5
    }, 
]

const useStyles = makeStyles((theme) => ({
    topBox: {
        // display: "center",
        paddingTop: "30px",
    },
    bottomBox: {
        marginBottom: "100px"
    },
    spacer: {
        padding: "10px"
    }
  }));

function Feed() {

    const styles = useStyles();

  return (
    <div className="container" styles={styles.root}>
      <header className="App-header">
        <Box className={styles.topBox}/>
        <Grid 
            container
            direction="column"
            spacing={1}
            alignItems="center"
            styles={styles.container}
        >
        < Questionnaire />
        <Box className={styles.spacer}/>
            <div>
                {users.map(user => {
                    return(
                    <span styles={{flex: 1, flexDirection: "row"}}>
                        <Grid container justify={"center"} spacing={5}>
                            <Grid item xs={12} sm={12}>
                                <FriendCard />
                            </Grid>
                        </Grid>
                    </span>
                    )
                })}
            </div>
        </Grid>
      </header>
      <Box className={styles.bottomBox}/>
      <BottomNav/>

    </div>
  );
}

export default Feed;
