import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
 
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
  list: {
    width: "100%",
    maxWidth: "300px",
    position: "fixed"
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: "50%",
    drawerWidth: "50%"
  }
});
 
const formStyle = { width: "100%" };
 
class OutlinedInputAdornments extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    player_initials: "",
    gender: "Male",
    player_dob: "",
    category: "B1",
    nationality: "",
    player_batting_style: "right-handed-batsman",
    player_bowling_style: "left-handed-bowler",
    player_role: "",
    player_status: "retired",
    properDate: "2000-01-01",
    startDate: new Date("2000-01-01")
  };
 
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
 
  render() {
    const { classes } = this.props;
 
    return (
      <div>
        <div className={classes.toolbar} />
 
        <div style={{ marginLeft: "35%", textAlign: "left", marginTop: "5%" }}>
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
              <h3>Referee</h3>
            </center>
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              label="First Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">First Name</InputAdornment>
                )
              }}
            />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              label="Last Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Last Name</InputAdornment>
                )
              }}
            />
            <br />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              label="Middle Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Middle Name</InputAdornment>
                )
              }}
            />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              label="City"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">City</InputAdornment>
                )
              }}
            />
            <br />
            <TextField
              style={{ width: "45%" }}
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
              label="Matches Refereed"
              type="number"
              style={{ width: "45%" }}
              variant="outlined"
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Matches Refereed
                  </InputAdornment>
                )
              }}
            />
            <br />
            <TextField
              style={{ width: "93%" }}
              label=" Experience "
              type="number"
              variant="outlined"
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Experience
                  </InputAdornment>
                )
              }}
            />
            <br />
            <br />
            <center>
              <Button
                variant="contained"
                style={{ width: "150px" }}
                className={classes.button}
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
 


