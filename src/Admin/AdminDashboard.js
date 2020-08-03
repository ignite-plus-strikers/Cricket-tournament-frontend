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
import Container from "@material-ui/core/Container"
//import { withRouter } from "react-router-dom";
import history from "history"




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


function handleTeamClick(){
 // history.push('/admin/dashboard/TeamDisplay')
 this.props.history.push('/admin/dashboard/TeamDisplay')
} 

function AdminDashboard(props) {
  const { classes } = props;
   return (
     
  <Container>
    <Grid container spacing ={10}>
        <Grid item >
            <Card className={classes.card}>
             <CardActionArea onClick={handleTeamClick}>
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
            <CardActionArea>
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

        </Grid>

        <Grid container spacing ={10}>
        <Grid item>
        <Card className={classes.card}>
          <CardActionArea>
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
          <CardActionArea>
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
    </Grid>
    </Container>
    
  );
}
AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDashboard);
 

