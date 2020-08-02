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
    value: "A-Limited Overs International",
    label: "A-Limited Overs International"
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
    value: "Second class",
    label: "Second class"
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
                <h3>Series</h3>
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
                    Series
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
                      Short Name
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
                
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Tournament"
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
                label="Series Type"
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
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Host country 1"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                    Host 1
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Host country 2"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Host 2
                    </InputAdornment>
                  )
                }}
              />
              <br />
              <TextField
                autoComplete='off'
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Host country 3"
                
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Host 3
                    </InputAdornment>
                  )
                }}
              />
               <TextField
                style={{ width: "45%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Host country 4"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Host 4
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
                label="Series Points"
                type="number"
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
                    style={{ width: "25%" }}
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

 


