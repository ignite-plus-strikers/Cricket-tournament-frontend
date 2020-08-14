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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayerDataService from '../Admin/Player/Service/PlayerDataService';
import TeamDataService from '../Admin/Team/Service/TeamDataService';
import UmpireDataService from '../Admin/Umpire/Service/UmpireDataService';
import FixtureDataService from '../Admin/Fixtures/Service/FixtureDataService';
import SeriesDataService from '../Admin/Series/Service/SeriesDataService';
import RefereeDataService from '../Admin/Referee/Service/RefereeDataService';
import SideNav from '../SideNav/SideNav';


const styles = {
  card: {
    backgroundColor : "#199FB1",
    color : "white",
    width : 300
  },
  media: {
        objectFit: 'cover',
  },
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
    this.handleTeamClick = this.handleTeamClick.bind(this)
    this.handlePlayerClick = this.handlePlayerClick.bind(this)
    this.handleSeriesClick = this.handleSeriesClick.bind(this)
    this.handleFixtureClick = this.handleFixtureClick.bind(this)
    this.handleUmpireClick = this.handleUmpireClick.bind(this)
    this.handleRefereeClick = this.handleRefereeClick.bind(this)
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
    handleTeamClick(){
      this.props.history.push('/admin/dashboard/TeamDisplay')
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
   return ( 
  <Container>
  <center>
      <br />
    <h1>Welcome {this.props.user_name}!</h1>
    </center>
    <SideNav />
    <div style={{marginLeft:160}}>
    <Grid container spacing ={10}>
        <Grid item >
            <Card className={classes.card}>
             <CardActionArea onClick={this.handleTeamClick}>
              <CardMedia
              component="img"
              alt="Teams"
              className={classes.media}
              height="200"
              image={team}
              title="Teams"
               />
               <CardContent>
               <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                 {this.state.teams.length}<br/> Total Teams         
               </Typography>
               </CardContent>
             </CardActionArea>
          </Card>
         </Grid>

         <Grid item>
          <Card className={classes.card}>
            <CardActionArea onClick={this.handlePlayerClick}>
            <CardMedia
              component="img"
              alt="Players"
              className={classes.media}
              height="200"
              image={player}
              title="Players"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
              {this.state.players.length}<br/> Total Players
              </Typography>
             </CardContent>
             </CardActionArea>
           </Card>
         </Grid>

         <Grid item>
         <Card className={classes.card}>
           <CardActionArea onClick={this.handleUmpireClick}>
           <CardMedia
             component="img"
             alt="Umpire"
             className={classes.media}
             height="200"
             image={umpire}
             title="Umpire"
             />
             <CardContent>
             <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
             {this.state.umpires.length}<br/> Total Umpires   
             </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        </Grid>

        <Grid container spacing ={10}>
        <Grid item>
        <Card className={classes.card}>
          <CardActionArea onClick = {this.handleFixtureClick}>
            <CardMedia
              component="img"
              alt="Fixtures"
              className={classes.media}
              height="200"
              image={fixture}
              title="Fixtures"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
              {this.state.fixtures.length}<br/> Total Fixtures  
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>


        <Grid item>
        <Card className={classes.card}>
          <CardActionArea onClick = {this.handleSeriesClick}>
          <CardMedia
          component="img"
          alt="Series"
          className={classes.media}
          height="200"
          image={series}
          title="Series"
        />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
              {this.state.Series.length}<br/> Total Series  
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>

        <Grid item>
        <Card className={classes.card}>
          <CardActionArea onClick={this.handleRefereeClick}>
          <CardMedia
            component="img"
            alt="Referee"
            className={classes.media}
            height="200"
            image={referee}
            title="Referee"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
            {this.state.referees.length}<br/> Total Referees   
            </Typography>
           </CardContent>
           </CardActionArea>
         </Card>
       </Grid>

    </Grid>
    </div>
    </Container>
    
  );
}
}
AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default withRouter(connect()(withStyles(styles)(AdminDashboard)))

export default withStyles(styles)(AdminDashboard);

