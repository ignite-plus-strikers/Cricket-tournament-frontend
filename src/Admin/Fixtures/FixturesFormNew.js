import React from "react";
 
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
 
import FixtureDataService from './Service/FixtureDataService';
import TeamDataService from '../Team/Service/TeamDataService';
import SeriesDataService from '../Series/Service/SeriesDataService';
import ScorerDataService from './Service/ScorerdataService';
import Input from "@material-ui/core/Input";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
 
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 950
  },
  list:{
    width: "100%",
    maxWidth: "300px",
    position: "fixed"
  }
});
 
const Team1 = [
  {
    value: "India",
    label: "India"
  },
  {
    value: "England",
    label: "England"
  },
  {
    value: "Sri Lanka",
    label: "Sri Lanka"
  }
];
const Team2 = [
  {
    value: "South Africa",
    label: "South Africa"
  },
  {
    value: "New Zealand",
    label: "New Zealand"
  },
  {
    value: "Austrila",
    label: "Austrila"
  }
];
const HomeTeam = [
  {
    value: "India",
    label: "India"
  },
  {
    value: "Austrila",
    label: "Austrila"
  }
];
 
const GameType = [
  {
    value: "Friendly Match",
    label: "Friendly Match"
  }
];
 
const Venue = [
  {
    value: "Bangaluru",
    label: "Bengaluru"
  },
  {
    value: "Chenni",
    label: "Chenni"
  }
];
 
const Series = [
  {
    value: "Twenty 20",
    label: "Twenty 20"
  },
  {
    value: "Champion Country Match",
    label: "Champion Country Match"
  }
];
 
const Scorer = [
  {
    value: "Scorer 1",
    label: "Scorer 1"
  },
  {
    value: "Scorer 2",
    label: "Scorer 2"
  }
];
 
const Live = [
  {
    value: "Yes",
    label: "Yes"
  },
  {
    value: "No",
    label: "No"
  }
];
 
const formStyle = { width: "100%" };
 
class OutlinedInputAdornments extends React.Component {
    constructor(props) {
        super(props)
 
        this.state = {
           team1:"",
           team2:"",
           home_team:"",
           match_type:"National",
           venue:"",
           series_name:"",
           series_id:"",
           description:"",
           fixture_date_time:"",
           gmt_offset:"",
           live_coverage:"Yes",
           scorer_id:"",
           scorer_name:"",
           teams:[],
           series:[],
           scorers:[]
        }
       
        this.refreshTeams = this.refreshTeams.bind(this)
        this.refreshSeries = this.refreshSeries.bind(this)
        this.refreshScorers = this.refreshScorers.bind(this)  
        
    }
    componentDidMount() {
        this.refreshTeams();
        this.refreshSeries();
        this.refreshScorers();
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
                    this.setState({ series: response.data })
                }
            )
            
    }
    refreshScorers() {
        ScorerDataService.retrieveAllScorers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ scorers: response.data })
                }
            )
            
    }
    
    
    
  /*  onSubmit(values) {
        let seriesName
        let scorer_name
        
 
        this.setState({series_id:values.series_id})
        this.state.series.map(s =>{
            if(s.series_id===this.state.series_id){
               seriesName=s.series_short_name
                }
        }
           
        )
 
        this.setState({scorer_id:values.scorer_id})
        this.state.scorers.map(s =>{
            if(s.scorer_id===this.state.scorer_id){
               scorer_name=s.firstname+" "+s.middlename+" "+s.lastname
                }
        }  
           
        ) 
 
        
        FixtureDataService.createFixture(fixture)
        .then(() => this.props.history.push('/admin/dashboard/FixtureDisplay'))
        console.log(fixture);
        
    }   */
 
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value ,
     
      
     });
    
  };
 handleSubmit=() => {
   /* var fixture={
      team2:values.team2,
      
  }*/
  alert(this.state.team2 + this.state.team1 + this.state.home_team + this.state.match_type + this.state.description + this.state.scorer_name + this.state.venue + this.state.fixture_date_time + this.state.gmt_offset + this.state.live_coverage)
  
 
  }
  
 
 
  render() {
    
 
    const { classes } = this.props;
 
    
 
    return (
      <div>
        <div class="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay"><div className="Selected_color">Fixtures</div></a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Team</a><hr></hr>
                </div>
 
          <div
            style={{ marginLeft: "35%", textAlign: "left", marginTop: "5%" }}
          >
            <br />
            <Paper
              style={{
                width: "600px",
                paddingLeft: "2%",
                paddingRight: "0%",
                paddingTop: "1%"
              }}
            >
              <center>
                <h3>Fixture</h3>
              </center>
              
               
              
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField,this.props.textField,this.props.dense)}
                margin="dense"
                variant="outlined"
                label="With Select"
                value={this.state.team1}
                onChange={this.handleChange("team1")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Team-1</InputAdornment>
                  )
                }}
              >
                {Team1.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.team2}
                onChange={this.handleChange("team2")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Team-2</InputAdornment>
                  )
                }}
              >
                {Team2.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.home_team}
                onChange={this.handleChange("home_team")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Home Team</InputAdornment>
                  )
                }}
              >
                {HomeTeam.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.match_type}
                onChange={this.handleChange("match_type")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Game Type</InputAdornment>
                  )
                }}
              >
                {GameType.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.venue}
                onChange={this.handleChange("venue")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Venue</InputAdornment>
                  )
                }}
              >
                {Venue.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.series_name}
                onChange={this.handleChange("series_name")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Series</InputAdornment>
                  )
                }}
              >
                {Series.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Match Description"
                value={this.description}
                onChange={this.handleChange("discription")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Match Description
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                onChange={this.handleChange("match_date_team")}
                variant="outlined"
                label="Match date and time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="GMT Offset"
                value= {this.gmt_offset}
                onChange={this.handleChange("gmt_offset")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">GMT Offset</InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.scorer_name}
                onChange={this.handleChange("scorer_name")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Scorer</InputAdornment>
                  )
                }}
              >
                {Scorer.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "93%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.live_coverage}
                onChange={this.handleChange("live_coverage")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Live Coverage
                    </InputAdornment>
                  )
                }}
              >
                {Live.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <center>
                <Button
                  variant="contained"
                  style={{ width: "150px" }}
                  className={classes.button}
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Create
                  
                </Button>
              </center>
              <br />
              <br /> <br />
              <br />
              
            </Paper>
          </div>
        </div>
    );
  }
}
 
OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
};
 
export default withStyles(styles)(OutlinedInputAdornments);
 

