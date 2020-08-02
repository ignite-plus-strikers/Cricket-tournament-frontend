import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
 
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
 
const formStyle = { width: "100%" };
 
const Tournament = [
  {
    value: "A-Limited Overs Internationals",
    label: "A-Limited Overs Internationals"
  },
  {
    value: "National",
    label: "National"
  }
];
const SeriesType = [
  {
    value: "First Class",
    label: "First Class"
  },
  {
    value: "Second Class",
    label: "Second Class"
  }
];
const Host1 = [
  {
    value: "India",
    label: "India"
  },
  {
    value: "Austrila",
    label: "Austrila"
  }
];
 
const Host2 = [
  {
    value: "Argentina",
    label: "Argentina"
  },
  {
    value: "Spain",
    label: "Spain"
  }
];
 
const Host3 = [
  {
    value: "Mexico",
    label: "Mexico"
  },
  {
    value: "South Africa",
    label: "South Africa"
  }
];
 
const Host4 = [
  {
    value: "New Zealand",
    label: "New Zealand"
  },
  {
    value: "Brazil",
    label: "Brazil"
  }
];
 
class OutlinedInputAdornments extends React.Component {
  state = {
    series_name: "",
    series_short_name: "",
    series_start_date: "",
    series_end_date: "",
    tournament: "A-Limited Overs International",
    series_type: "First Class",
    host1: "India",
    host2: "Argentina",
    host3: "Mexico",
    host4: "New Zealand",
    points_table_active: false,
    series_points: ""
  };
 
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
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
                <h3>Add new Series</h3>
              </center>
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Series Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Name of the Series
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Series Short Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Short Name of Series
                    </InputAdornment>
                  )
                }}
              />
              <br />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Series Start Date"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Series End Date"
                type="date"
                defaultValue="2017-05-25"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With Select"
                value={this.state.tournament}
                onChange={this.handleChange("tournament")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Tournament</InputAdornment>
                  )
                }}
              >
                {Tournament.map(option => (
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
                value={this.state.series_type}
                onChange={this.handleChange("series_type")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Series Type
                    </InputAdornment>
                  )
                }}
              >
                {SeriesType.map(option => (
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
                value={this.state.host1}
                onChange={this.handleChange("host1")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Host Country-1
                    </InputAdornment>
                  )
                }}
              >
                {Host1.map(option => (
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
                value={this.state.weightRange}
                onChange={this.handleChange("host2")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Host Country-2
                    </InputAdornment>
                  )
                }}
              >
                {Host2.map(option => (
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
                value={this.state.host3}
                onChange={this.handleChange("host3")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Host Country-3
                    </InputAdornment>
                  )
                }}
              >
                {Host3.map(option => (
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
                value={this.state.host4}
                onChange={this.handleChange("host4")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Host Country-4
                    </InputAdornment>
                  )
                }}
              >
                {Host4.map(option => (
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
                label="Series Short Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Series Points
                    </InputAdornment>
                  )
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ width: "45%" }}
                    onChange={this.handleChange}
                    className={classNames(classes.margin)}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Points Table"
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

 


