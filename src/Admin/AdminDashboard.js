import React from 'react'
import '../App.css';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import player from "./cards_images/player.jpg"
import fixture from "./cards_images/fixture.jpg"
import team from "./cards_images/team.jpg"
import series from "./cards_images/series.jpg"
import umpire from "./cards_images/umpire.jpg"
import referee from './cards_images/referee.jpg'
import Container from "@material-ui/core/Container"

import PlayerDataService from '../Admin/Player/Service/PlayerDataService';
import TeamDataService from '../Admin/Team/Service/TeamDataService';
import UmpireDataService from '../Admin/Umpire/Service/UmpireDataService';
import FixtureDataService from '../Admin/Fixtures/Service/FixtureDataService';
import SeriesDataService from '../Admin/Series/Service/SeriesDataService';
import RefereeDataService from '../Admin/Referee/Service/RefereeDataService';


 import Cookies from 'js-cookie'


import AdminSidenav from './AdminSidenav';
import { Link } from 'react-router-dom';
import Header from './../Scorer/Header';

const styles = {
  card: {
    backgroundColor : "#1854af",
    color : "white",
    width : 300
  },
  media: {
        height:'70',
        objectFit: 'fill',
  },
  link:{
    color:"#ffffff"
  },
  typo:{
    color:"#1854af",
    marginLeft: 170,
    marginTop : 10,
    align: "center"
  }

};


class AdminDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players:[],
      Series:[],
      teams:[],
      fixtures:[],
      umpires:[],
      referees:[]
    }
    //this.handleTeamClick = this.handleTeamClick.bind(this)
    //this.handlePlayerClick = this.handlePlayerClick.bind(this)
    //this.handleSeriesClick = this.handleSeriesClick.bind(this)
    //this.handleFixtureClick = this.handleFixtureClick.bind(this)
    //this.handleUmpireClick = this.handleUmpireClick.bind(this)
    //this.handleRefereeClick = this.handleRefereeClick.bind(this)
    this.refreshPlayers=this.refreshPlayers.bind(this)
    this.refreshTeams = this.refreshTeams.bind(this)
    this.refreshSeries = this.refreshSeries.bind(this)
    this.refreshFixtures = this.refreshFixtures.bind(this)
    this.refreshReferees = this.refreshReferees.bind(this)
    this.refreshUmpires = this.refreshUmpires.bind(this)

  }
  componentDidMount(){
    this.refreshPlayers();
    this.refreshTeams();
    this.refreshUmpires();
    this.refreshSeries();
    this.refreshFixtures();
    this.refreshReferees();
  }
  
     refreshPlayers() {
      PlayerDataService.retrieveAllPlayers()
          .then(
              response => {
                  console.log(response);
                  this.setState({ players: response.data })
              }
          )
          
  }
  refreshTeams() {
    TeamDataService.retrieveAllTeams()
        .then(
            response => {
                console.log(response);
                this.setState({ teams: response.data })
            }
        )
}
refreshSeries() {
  SeriesDataService.retrieveAllSeries()
      .then(
          response => {
              console.log(response);
              this.setState({ Series: response.data })
          }
      )
}
refreshFixtures() {
  FixtureDataService.retrieveAllFixtures()
      .then(
          response => {
              console.log(response);
              this.setState({ fixtures: response.data })
          }
      )
}
refreshReferees() {
  RefereeDataService.retrieveAllReferees()
      .then(
          response => {
              console.log(response);
              this.setState({ referees: response.data })
          }
      )
}
refreshUmpires() {
  UmpireDataService.retrieveAllUmpires()
      .then(
          response => {
              console.log(response);
              this.setState({ umpires: response.data })
          }
      )
}


handleTeamClick(){
  this.props.history.push('/admin/dashboard/TeamDisplay')
 } 
 
    handlePlayerClick(){
      this.props.history.push('/admin/dashboard/PlayerDisplay')
     } 

     handleSeriesClick(){
      this.props.history.push('/admin/dashboard/SeriesDisplay')
     } 

     handleFixtureClick(){
      this.props.history.push('/admin/dashboard/FixtureDisplay')
     } 

     handleUmpireClick(){
      this.props.history.push('/admin/dashboard/UmpireDisplay')
     } 

     
     handleRefereeClick(){
      this.props.history.push('/admin/dashboard/RefereeDisplay')
     } 
 
  render(){
    const { classes } = this.props;
    const user_name = Cookies.get("name");
   return ( 
<div style={{marginTop:60}}>
 <Header />
    <AdminSidenav style={{position:"sticky",position:"-webkit-sticky"}} />
  <Container><br/>
  
 
    <Typography variant = "h4" align="center" className = {classes.typo}>Welcome {user_name}!</Typography>
    <br/>
    <div style = {{marginLeft : 230}}>
    <Grid container spacing ={6}>
        <Grid item >
            <Card className={classes.card}>
              <Link to = "/admin/dashboard/TeamDisplay" className={classes.link}>
             <CardActionArea>
              <CardMedia
              component="img"
              alt="Teams"
              className={classes.media}
              height="150"
              image={team}
              title="Teams"
               />
               <CardContent style={{height:'50%'}}>
               <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
               Total Teams : {this.state.teams.length}        
               </Typography>
               </CardContent>
             </CardActionArea></Link>
          </Card>
         </Grid>

         <Grid item>
          <Card className={classes.card} >
          <Link to = "/admin/dashboard/PlayerDisplay" className={classes.link}>
            <CardMedia
              component="img"
              alt="Players"
              className={classes.media}
              height="150"
              image={player}
              title="Players"
              />
              <CardContent style={{height:'50%'}}>
              <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
              Total Players : {this.state.players.length}
              </Typography>
             </CardContent>
             </Link>
           </Card>
         </Grid>

         <Grid item>
         <Card className={classes.card}>
         <Link to = "/admin/dashboard/UmpireDisplay" className={classes.link}>
           <CardMedia
             component="img"
             alt="Umpire"
             className={classes.media}
             height="150"
             image={umpire}
             title="Umpire"
             />
             <CardContent style={{height:'50%'}}>
             <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
             Total Umpires : {this.state.umpires.length}
             </Typography>
            </CardContent>
            </Link>
          </Card>
        </Grid>

        </Grid>

        <Grid container spacing ={6}>
        <Grid item>
        <Card className={classes.card}>
        <Link to = "/admin/dashboard/FixtureDisplay" className={classes.link}>
            <CardMedia
              component="img"
              alt="Fixtures"
              className={classes.media}
              height="150"
              image={fixture}
              title="Fixtures"
            />
            <CardContent style={{height:'50%'}}>
              <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
              Total Fixtures : {this.state.fixtures.length}   
              </Typography>
            </CardContent>
         </Link>
        </Card>
        </Grid>


        <Grid item>
        <Card className={classes.card}>
        <Link to = "/admin/dashboard/SeriesDisplay" className={classes.link}>
          <CardMedia
          component="img"
          alt="Series"
          className={classes.media}
          height="150"
          image={series}
          title="Series"
        />
            <CardContent style={{height:'50%'}}>
              <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
              Total Series : {this.state.Series.length}
              </Typography>
            </CardContent>
          </Link>
        </Card>
        </Grid>

        <Grid item>
        <Card className={classes.card}>
        <Link to = "/admin/dashboard/RefereeDisplay" className={classes.link}>
          <CardMedia
            component="img"
            alt="Referee"
            className={classes.media}
            height="150"
            image={referee}
            title="Referee"
            />
            <CardContent style={{height:'50%'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
            Total Referees : {this.state.referees.length}   
            </Typography>
           </CardContent>
           </Link>
         </Card>
       </Grid>

    </Grid>
    </div>
    </Container>
    </div>
    
  );
}
}
AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default withRouter(connect()(withStyles(styles)(AdminDashboard)))

// export default withStyles(styles)(
//   connect(mapStateToProps)(withRouter(AdminDashboard))
// )
export default withStyles(styles)(AdminDashboard)
//export default withRouter(connect()AdminDashboard);


// export default (
//     (withRouter(AdminDashboard))
//)
