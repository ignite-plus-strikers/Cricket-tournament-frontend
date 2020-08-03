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
import Container from "@material-ui/core/Container"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


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
    this.handleTeamClick = this.handleTeamClick.bind(this)
    this.handlePlayerClick = this.handlePlayerClick.bind(this)
    this.handleSeriesClick = this.handleSeriesClick.bind(this)
    this.handleFixtureClick = this.handleFixtureClick.bind(this)
    this.handleUmpireClick = this.handleUmpireClick.bind(this)
    this.handleRefereeClick = this.handleRefereeClick.bind(this)


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
   return ( 
  <Container>
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
               <Typography gutterBottom variant="h5" component="h2">
                 Teams         
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
              <Typography gutterBottom variant="h5" component="h2">
                Players
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
             <Typography gutterBottom variant="h5" component="h2">
              Umpires
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
              <Typography gutterBottom variant="h5" component="h2">
                  Fixtures
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
              <Typography gutterBottom variant="h5" component="h2">
                  Series
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
            image={umpire}
            title="Referee"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Referee
            </Typography>
           </CardContent>
           </CardActionArea>
         </Card>
       </Grid>

    </Grid>
    </Container>
    
  );
}
}
AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default withRouter(connect()(withStyles(styles)(AdminDashboard)))

export default withStyles(styles)(AdminDashboard);
 

