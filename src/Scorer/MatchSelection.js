import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { Divider, Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 400,
    height:'auto',
    marginLeft:210,
    marginTop:20
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});

function MatchSelection (props)  {
    const classes = useStyles();
    return (
       <Container>
       <center>
    <h1>Welcome {props.user_name}!</h1></center>
      <Typography style ={{marginLeft:100}}variant="h5">Live Match</Typography>
      <Grid>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" align="center">India vs England</Typography>
            <Divider />
            <Typography variant="h6" align="center" >1st T20 at Chinnaswamy Stadium,Bangalore on 14-08-2020 15:30:30 </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Button variant="contained" color="primary" href="/scorer/MatchSelection/prematch">Pre-match Screen</Button>
            <Button variant="contained" color="primary">Scoring Screen</Button>
          </CardActions>
        </Card></Grid>

        <Typography style ={{marginLeft:100}}variant="h5">Upcoming Matches</Typography>
        <Grid>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" align="center">India vs England</Typography>
            <Divider />
            <Typography variant="h6" align="center" >2nd T20 at Eden Gardens,Kolkata on 16-08-2020 15:30:30  </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Button variant="contained" color="primary" href="/scorer/MatchSelection/prematch">Pre-match Screen</Button>
            <Button variant="contained" color="primary">Scoring Screen</Button>
          </CardActions>
        </Card></Grid>
      </Container>  
    );
}
 export default MatchSelection;