import { FriendCard } from '../FriendCard.js';
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import BottomNav from '../BottomNav.js';

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
    container: {
        // display: "center",
        paddingTop: "10%",
    }
  }));

function Feed() {

    const styles = useStyles();

  return (
    <div className="container" styles={styles.container}>
      <header className="App-header">

        <Grid 
            container
            direction="column"
            spacing={1}
            alignItems="center"
            styles={styles.container}
        >
            <div>
                {users.map(user => {
                    return(
                        <span>
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
      <BottomNav/>

    </div>
  );
}

export default Feed;
