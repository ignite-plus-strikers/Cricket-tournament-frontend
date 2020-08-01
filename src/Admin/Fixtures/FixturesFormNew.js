import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper"
import Button from '@material-ui/core/Button';
 
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
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
  
    width: "50%",
    drawerWidth: "50%"
    },
});
 
const Gender = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  }
];
const Visual = [
  {
    value: "B1",
    label: "B1"
  },
  {
    value: "B2",
    label: "B2"
  },
  {
    value: "B3",
    label: "B3"
  }
];
const Batting = [
  {
    value: "Right-Hand Batting",
    label: "Right-Hand Batting"
  },
  {
    value: "Left-Hand Batting",
    label: "Left-Hand Batting"
  },
 
];
 
const Bowling = [
  {
    value: "Right-Hand Bowling",
    label: "Right-Hand Bowling"
  },
  {
    value: "Left-Hand Bowling",
    label: "Left-Hand Bowling"
  },
  
];
 
const State = [
  {
    value: "Retired",
    label: "Retired"
  },
  {
    value: "Playing",
    label: "Playing"
  }
];
const formStyle={width:"100%"}
 
class OutlinedInputAdornments extends React.Component {
  state = {
    first_name:'',
            last_name:'',
            player_initials:'',
            gender:'Male',
            player_dob:'',
            category:'B1',
            nationality:'',
            player_batting_style:'right-handed-batsman',
            player_bowling_style:'left-handed-bowler',
            player_role:'',
            player_status:'retired',
            properDate:"2000-01-01",
            startDate:new Date("2000-01-01")
  };
 
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
 
  render() {
    const { classes } = this.props;
 
    return (
      <div>
        
        
      
        <div className={classes.toolbar} />
        
          
      <div style={{marginLeft:"35%",textAlign:"left",marginTop:"5%"}} >
        <br></br>
        <Paper  style={{width:"600px",paddingLeft:"2%",paddingRight:"0%",paddingTop:"1%"}}>
        <center><h3>Add new Player</h3></center>  
        <TextField
        style={{width:"45%"}}
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="First Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Name</InputAdornment>
            )
          }}
        />
      
        <TextField
           style={{width:"45%"}}
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Last Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Name</InputAdornment>
            )
          }}
        />
 
 <br></br>
        <TextField
           style={{width:"45%"}}
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Initials"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Initials</InputAdornment>
            )
          }}
        />
 
        <TextField
            style={{width:"45%"}}
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Gender"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Gender</InputAdornment>
            )
          }}
        >
          {Gender.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
 
        <br></br>
 
        <TextField 
          style={{width:"45%"}}
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Date of Birth"
          type="date"
          defaultValue="2009-01-01"
          InputLabelProps={{
            shrink: true
          }}
        />
 
        <TextField 
          style={{width:"45%"}} 
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Visual Classification"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                Visual Classification
              </InputAdornment>
            )
          }}
        >
          {Visual.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br>
        <TextField  
          style={{width:"45%"}} 
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Nationality"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Nationality</InputAdornment>
            )
          }}
        />
 
        <TextField  
          style={{width:"45%"}} 
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Batting style"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Batting Style</InputAdornment>
            )
          }}
        >
          {Batting.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br>
        <TextField  
           style={{width:"45%"}} 
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Bowling style"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Bowling Style</InputAdornment>
            )
          }}
        >
          {Bowling.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      
        <TextField  
           style={{width:"45%"}} 
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Player Role"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Player Role</InputAdornment>
            )
          }}
        />
 <br></br>
        <TextField  
           style={{width:"93%"}} 
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Player status"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Player Status</InputAdornment>
            )
          }}
        >
          {State.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br><br></br>
      <center><Button variant="contained" style={{width:"150px"}} className={classes.button}>
        Create
      </Button></center>  
        <br></br><br></br> <br></br><br></br>
       
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

 

