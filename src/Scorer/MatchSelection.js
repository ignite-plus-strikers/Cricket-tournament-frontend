import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider, Container } from '@material-ui/core';
import Header from './Header'
import Clock from './Clock';
import axios from 'axios'
import Cookies from 'js-cookie'
import moment from 'moment';
import {Redirect} from "react-router-dom"

const useStyles = theme => ({
  root: {
    width: 300,
    height: 'auto',
    backgroundColor:'#e3f2fd',
    marginLeft:70,
    marginTop:20
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
    if(Cookies.get("role") === undefined || Cookies.get("role") !== "CABI_APPL_SCORER") return <Redirect to  = "/" /> 
    return (
     <div style = {{marginTop:100}}>
      <Header />
      <Clock />
      <Container>
        <Typography variant="h4" color="primary" align="center" style={{marginTop:0}}>Welcome {user_name}! Happy Scoring! </Typography>
        {this.state.fixtures.map((fixture) => {if (moment(todayDate).isSame(fixture.fixture_date) && time>fixture.fixture_start_time && time<fixture.fixture_end_time) 
        {
        return(
          <div>
    <Typography variant="h5" align="left" style={{marginTop:20,marginLeft:70}} >Live Match</Typography> 
       
         
              <Card className = {classes.root} variant="elevation" elevation = {5}>
              <CardContent style={{padding:5}}>
              <Typography variant="h5" color="primary" align="center" style={{marginTop:5}}>{fixture.team1}<br /> VS <br />{fixture.team2}</Typography>
              <Divider />
        <Typography variant="body1" align="center" color="textSecondary"><b>{fixture.description}</b> at <b>{fixture.venue}</b> <br />scheduled on <b>{fixture.fixture_date} {fixture.fixture_start_time}</b> </Typography>
        </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" style={{margin:'auto'}} onClick={() => this.PrematchScreenClicked(fixture.fixture_id)}>Pre-match Screen</Button>
              
            </CardActions>
            </Card></div>
          );
        }
       
  })}
      
     
         
            <Typography variant="h5" align="left" style={{marginTop:20,marginLeft:70}} >Upcoming Matches</Typography> 
      {this.state.fixtures.map((fixture) => {if (moment(todayDate).isSame(fixture.fixture_date) && time<fixture.fixture_start_time) 
        {
        return(
            <div className={classes.node}>
            <Card className = {classes.root} variant="elevation" elevation = {5}>
              <CardContent style = {{padding:5}}>
              <Typography variant="h5" color="primary" align="center">{fixture.team1} <br /> VS <br /> {fixture.team2}</Typography>
              <Divider />
        <Typography variant="body1" align="center" color="textSecondary"><b>{fixture.description}</b> at <b>{fixture.venue}</b> <br /> scheduled on <b>{fixture.fixture_date} {fixture.fixture_start_time}</b> </Typography>
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
     {this.state.fixtures.map((fixture) => {if (moment(todayDate).isBefore(fixture.fixture_date)) 
        {
        return(
        
          <div className={classes.node}>
            <Card className = {classes.root} variant="elevation" elevation = {5} >
              <CardContent style={{padding:5}}>
              <Typography variant="h5" color="primary" align="center">{fixture.team1} <br /> VS  <br />{fixture.team2}</Typography>
              <Divider />
        <Typography variant="body1" align="center" color="textSecondary"><b>{fixture.description}</b> at <b>{fixture.venue}</b> <br /> scheduled on <b>{fixture.fixture_date} {fixture.fixture_start_time}</b> </Typography>
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