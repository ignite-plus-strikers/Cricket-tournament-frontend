import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider, Container } from '@material-ui/core';
import Header from './Header'
//import MatchSelectionService from "../service/MatchSelectionService"
import Clock from './Clock';
import axios from 'axios'
import Cookies from 'js-cookie'
import moment from 'moment';
import Pagination from '@material-ui/lab/Pagination';
import { AutoComplete } from 'rsuite';



const useStyles = theme => ({
  root: {
    width: 300,
    height: 'auto',
    backgroundColor:'#f5f5f5',
    marginLeft:70,
    marginTop:20,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  palette:{
    primary:{
      main: '#039be5'
    }
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
     window.location.href=`/scorer/PreMatch/`+id
  }

  render(){
    const {classes} = this.props;
    const user_name = Cookies.get("name");
    return (
     <div style = {{marginTop:100}}>
      <Header />
      <Clock />
      <Container>
        <Typography variant="h5" color="primary" align="center" style={{marginTop:10}}>Welcome {user_name}! Happy Scoring! </Typography>
        {this.state.fixtures.map((fixture) => {if (moment(todayDate).isSame(fixture.fixture_date) && time>fixture.fixture_start_time && time<fixture.fixture_end_time) 
        {
        return(
          <div>
    <Typography variant="h5" align="left" style={{marginTop:20,marginLeft:70}} >Live Match</Typography> 
       
         
              <Card className = {classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h6" color="primary" align="center" style={{marginTop:5}}>{fixture.team1} VS {fixture.team2}</Typography>
              <Divider />
        <Typography variant="body2" align="center" color="textSecondary">{fixture.description} at {fixture.venue} scheduled on {fixture.fixture_date} {fixture.fixture_start_time} </Typography>
        </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" style={{margin:'auto'}} onClick={() => this.PrematchScreenClicked(fixture.fixture_id)}>Pre-match Screen</Button>
              
            </CardActions>
            </Card></div>
          );
        }
        {/*else{
          return(
            <Typography variant="h6">No live matches</Typography>
          );
        }*/}
  })}
      
     
         
            <Typography variant="h5" align="left" style={{marginTop:20,marginLeft:70}} >Upcoming Matches</Typography> 
      {this.state.fixtures.map((fixture) => {if (moment(todayDate).isSame(fixture.fixture_date) && time<fixture.fixture_start_time) 
        {
        return(
            <div className={classes.node}>
            <Card className = {classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h6" color="primary" align="center">{fixture.team1} VS {fixture.team2}</Typography>
              <Divider />
        <Typography variant="body2" align="center" color="textSecondary">{fixture.description} at {fixture.venue} scheduled on {fixture.fixture_date} {fixture.fixture_start_time} </Typography>
        </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" style={{margin:'auto'}} disabled>Pre-match Screen</Button>
              
            </CardActions>
            </Card></div>
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
            <Card className = {classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h6" color="primary" align="center">{fixture.team1} VS {fixture.team2}</Typography>
              <Divider />
        <Typography variant="body2" align="center" color="textSecondary">{fixture.description} at {fixture.venue} scheduled on {fixture.fixture_date} {fixture.fixture_start_time} </Typography>
        </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" style={{margin:'auto'}} disabled>Pre-match Screen</Button>
              
            </CardActions>
            </Card></div>
         
         
        );
      }
     }
    )
  }
    
    </Container> </div>
  );
}
}


export default withStyles(useStyles)(MatchSelection);