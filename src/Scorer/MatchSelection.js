import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

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

function MatchSelection() {
    const classes = useStyles();
    return (
       
       //<div></div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" align="center">India vs England</Typography>
            <Divider />
            <Typography variant="h6" align="center" >National Stadium Karachi, Pakistan 10 July 2020 @ 13:30 </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Button variant="contained" color="secondary" href="/scorer/MatchSelection/prematch">Pre-match Screen</Button>
            <Button variant="outlined" color="primary">Scoring Screen</Button>
          </CardActions>
        </Card>
    );
}
 export default MatchSelection;