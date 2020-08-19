import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider, Container } from '@material-ui/core';
//import MatchSelectionService from "../service/MatchSelectionService"
import Clock from './Clock';
import axios from 'axios'
import moment from 'moment';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = theme => ({
  root: {
    width: 400,
    height:'auto',
    marginLeft:100,
    marginTop:20,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  typo:{
    variant:'h4',
    color:'textSecondary',
    align:'center',
  },
  node: {
    display: "flex",
    float: "left"
  },

});


var date = new Date();
var todayDate = moment(date).format('YYYY-MM-DD')

var time = moment(date).format('HH:mm:ss')


class MatchSelection extends React.Component{
    constructor(props){
      super(props);
      this.state={
        fixtures:[]
      };
      this.PrematchScreenClicked = this.PrematchScreenClicked.bind(this)

    }
   

    componentDidMount(){
      axios.get("http://localhost:8080/cricket-tournament/fixtures")
          .then(response => response.data)
          .then((data) => {
            this.setState({fixtures:data});
          });
    }
    PrematchScreenClicked(id) {
      //this.props.history.push(`/scorer/PreMatch/${id}`)
      window.location.href="/scorer/PreMatch/"+id
  }

  render(){
    const {classes} = this.props;
    return (
      <Container>
       
        <Typography variant="h5" color="primary" align="center" style={{marginTop:20}}>Welcome Scorer! Happy Scoring! </Typography>
    <Typography variant="h5" align="left" style={{marginTop:20,marginLeft:80}} >Live Match</Typography> 
        {this.state.fixtures.map((fixture) => {if (moment(todayDate).isSame(fixture.fixture_date) && time>fixture.fixture_start_time && time<fixture.fixture_end_time) 
        {
        return(
         
              <Card className = {classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h5" color="primary" align="center">{fixture.team1} vs {fixture.team2}</Typography>
              <Divider />
        <Typography variant="body1" align="center" color="textSecondary">{fixture.description} at {fixture.venue} scheduled on {fixture.fixture_date} {fixture.fixture_start_time}</Typography>
              </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary"  onClick={() => this.PrematchScreenClicked(fixture.fixture_id)}>Pre-match Screen</Button>
              <Button variant="contained" color="primary" href="/scorer/ScoringScreen">Scoring Screen</Button>
            </CardActions>
            </Card>
          );
        }
        {/*else{
          return(
            <Typography variant="h6">No live matches</Typography>
          );
        }*/}
  })}
      
  
        <Typography variant="h5" align="left" style={{marginTop:20,marginLeft:80}} >Upcoming Matches</Typography> 
        {this.state.fixtures.map((fixture) => {if (moment(todayDate).isSame(fixture.fixture_date) && time<fixture.fixture_start_time) 
        {
        return(
         
            <Card className={classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h5" align="center" color="primary">{fixture.team1} vs {fixture.team2}</Typography>
              <Divider />
              <Typography variant="body1" align="center" color="textSecondary">{fixture.description} at {fixture.venue} scheduled on {fixture.fixture_date} {fixture.fixture_start_time}</Typography>
              </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" href="/scorer/MatchSelection/prematch" disabled>Pre-match Screen</Button>
              <Button variant="contained" color="primary" href="/scorer/MatchSelection/ScoringScreen"disabled>Scoring Screen</Button>
            </CardActions>
            </Card>
        );
      }
      {/*else{
            return(
              <Container>
                <p>No upcoming matches</p></Container>
            );
          }*/} 
        }
      )
    }
     {this.state.fixtures.map((fixture) => {if (moment(todayDate).isBefore(fixture.fixture_date)) 
        {
        return(
        
          <div className={classes.node}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h5" align="center" color="primary">{fixture.team1} vs {fixture.team2}</Typography>
              <Divider />
              <Typography variant="body1" align="center" color="textSecondary">{fixture.description} at {fixture.venue} scheduled on {fixture.fixture_date} {fixture.fixture_start_time}</Typography>
              </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" disabled>Pre-match Screen</Button>
              <Button variant="contained" color="primary" href="/scorer/MatchSelection/ScoringScreen"disabled>Scoring Screen</Button>
            </CardActions>
            </Card></div>
         
         
        );
      }
     }
    )
  }
    
    </Container> 
  );
}
}


export default withStyles(useStyles)(MatchSelection);