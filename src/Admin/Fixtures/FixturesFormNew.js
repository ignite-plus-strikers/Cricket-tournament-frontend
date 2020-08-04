/*import React from "react";
 
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
 



 
const GameType = [
  {
    value: "National",
    label: "National"
  },
  {
    value: "Regional",
    label: "Regional"
  },
  {
    value: "Zonal",
    label: "Zonal"
  },
  {
    value: "International",
    label: "International"
  },
  {
    value: "Friendly match",
    label: "Friendly match"
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
    
    
    
 
 
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value ,
     
      
     });
    
  };
 
  
 
 
  render() {
    
 
    const { classes } = this.props;
 
    
 
    return (
      <div>
        
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
                className={classNames(classes.margin, classes.textField)}
                
                variant="outlined"
                label="Team-1"
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
                label="Team-2"
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
                label="Home Team"
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
                label="Match Type"
                value={this.state.match_type}
                onChange={this.handleChange("match_type")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"> Match Type</InputAdornment>
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
                label="Venue"
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
                label="Series"
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
                onChange={this.handleChange("description")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                  Description
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                onChange={this.handleChange("fixture_date")}
                variant="outlined"
                label="Match date"
                type="date"
               
                InputLabelProps={{
                  shrink: true
                }}
              />
 
            <TextField
            style={{ width: "45%" }}
            id="outlined-simple-start-adornment"
            className={classNames(classes.margin, classes.textField)}
            label="Match time"
            type="time"
            defaultValue="00:00"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
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
                label="Scorer"
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
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Live coverage"
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
 
export default withStyles(styles)(OutlinedInputAdornments);*/
 



 


