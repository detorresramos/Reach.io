import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Fab, CardContent, Grid } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    maxWidth: "500px",
  },
});

const emojis = ["😀", "🙂", "😐", "🙁", "😥"]

const handleEmojiClick = function(idx) {
    console.log(emojis[idx]); // send this idx to the backend :)

};

export default function Questionnaire(props) {
  const classes = useStyles();

  return (
    <div>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <h3> How do you feel today?</h3>
                <span>
                <Grid 
                    container 
                    direction="column"
                    alignItems="center">
                    {emojis.map((es, idx) => {
                        return (
                        <span styles={{flex: 1, flexDirection: "row"}}>
                            <Grid container direction="row">
                                <Grid item xs={2}>
                                    <Fab 
                                        style={{fontSize: "50px", backgroundColor: "white", textAlign: "justify"}} onClick={() => handleEmojiClick(idx)}>
                                        {es}
                                    </Fab>
                                </Grid>
                            </Grid>
                        </span>
                        );
                    })}
                </Grid>
                </span>
            </CardContent>
        </Card>
    </div>
  );
}