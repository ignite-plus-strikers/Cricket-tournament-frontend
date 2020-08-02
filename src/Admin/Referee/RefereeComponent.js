import React, { Component } from 'react'
import RefereeDataService from './Service/RefereeDataService';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';



import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
 
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

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
 

class RefereeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            referees: [],
            message: null,
            first_name:'',
            middle_name:'',
            last_name:'',
            city:'',
            nationality:'',
            matches_refereed:'',
            experience:'',
            referee_id:'',
            open:false,
            open_u:false
        }
      
        this.refreshReferees = this.refreshReferees.bind(this)
        this.updateRefereeClicked = this.updateRefereeClicked.bind(this)
        this.addRefereeClicked = this.addRefereeClicked.bind(this)
    }

    componentDidMount() {
        this.refreshReferees();
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

   
    updateRefereeClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Referee/${id}`)
    }

    addRefereeClicked() {
        this.props.history.push(`/admin/dashboard/RefereeAddForm`)
    }

    openAddForm = e => {
      this.setState({
        open: true
      
      });
    };
    openUpdateForm = e => {
    this.setState({
       referee_id:e
        
      });
      RefereeDataService.retrieveReferee(e)
            .then(response => this.setState({
                first_name: response.data.first_name,
                middle_name: response.data.middle_name,
                last_name:response.data.last_name,
                city:response.data.city,
                nationality:response.data.nationality,
                matches_refereed:response.data.matches_refereed,
                experience :response.data.experience
                

            }))
     
      this.setState({
        open_u:true
        
      });
    };
  handleClose = () => {
      this.setState({ open: false,open_u:false });
    };
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };
    handleSubmit=() => {
     
      var referee = {
        first_name: this.state.first_name,
        middle_name: this.state.middle_name,
        last_name: this.state.last_name,
        city:this.state.city,
        nationality:this.state.nationality,
        matches_refereed:this.state.matches_refereed,
        experience:this.state.experience
    }
   
    console.log(referee);
        RefereeDataService.createReferee(referee)
      .then(
        response => {
            this.setState({open:false })
            this.refreshReferees()
        }
    )  
     
    
     }
     handleUpdate=() => {
     
      var referee = {
        first_name: this.state.first_name,
        middle_name: this.state.middle_name,
        last_name:this.state.last_name,
        city:this.state.city,
        nationality:this.state.nationality,
        matches_refereed:this.state.matches_refereed,
        experience:this.state.experience
    }
    
      console.log(referee);
       
      RefereeDataService.updateReferee(this.state.referee_id, referee)
      .then(
        response => {
            this.setState({open_u:false })
            this.refreshReferees()
        }
    )  
    
     }
     
    


    render() {
      const { classes } = this.props;

        const columns = [{  
            Header: 'First Name',
            accessor: 'first_name',
            filterMethod: (filter, row) => {
                var v = row[filter.id]
                  .toString()
                  .toUpperCase()
                  .search(filter.value.toUpperCase());
                // row[filter.id].toString().startsWith(filter.value)
                if (v >= 0) {
                  return true;
                } else return false;
              }, Filter: ({filter, onChange}) => (
                <input
                placeholder="Search"
                  onChange={event => onChange(event.target.value)}
                  value={filter ? filter.value : ''}
                  style={{
                    width: '100%',
                    backgroundColor: '#DCDCDC',
                    color: 'black',
                  }}
                />
              )       
            },{  
            Header: 'Middle Name',  
            accessor: 'middle_name',
            filterMethod: (filter, row) => {
                var v = row[filter.id]
                  .toString()
                  .toUpperCase()
                  .search(filter.value.toUpperCase());
                // row[filter.id].toString().startsWith(filter.value)
                if (v >= 0) {
                  return true;
                } else return false;
              } , Filter: ({filter, onChange}) => (
                <input
                placeholder="Search"
                  onChange={event => onChange(event.target.value)}
                  value={filter ? filter.value : ''}
                  style={{
                    width: '100%',
                    backgroundColor: '#DCDCDC',
                    color: 'black',
                  }}
                />
              )       
            },{  
            Header: 'Last Name',  
            accessor: 'last_name',
            filterMethod: (filter, row) => {
                var v = row[filter.id]
                  .toString()
                  .toUpperCase()
                  .search(filter.value.toUpperCase());
                // row[filter.id].toString().startsWith(filter.value)
                if (v >= 0) {
                  return true;
                } else return false;
              }, Filter: ({filter, onChange}) => (
                <input
                placeholder="Search"
                  onChange={event => onChange(event.target.value)}
                  value={filter ? filter.value : ''}
                  style={{
                    width: '100%',
                    backgroundColor: '#DCDCDC',
                    color: 'black',
                  }}
                />
              )         
            },{  
            Header: 'City',  
            accessor: 'city',
            filterMethod: (filter, row) => {
              var v = row[filter.id]
                .toString()
                .toUpperCase()
                .search(filter.value.toUpperCase());
              // row[filter.id].toString().startsWith(filter.value)
              if (v >= 0) {
                return true;
              } else return false;
            }, Filter: ({filter, onChange}) => (
              <input
              placeholder="Search"
                onChange={event => onChange(event.target.value)}
                value={filter ? filter.value : ''}
                style={{
                  width: '100%',
                  backgroundColor: '#DCDCDC',
                  color: 'black',
                }}
              />
            )        
            },{  
            Header: 'Nationality',  
            accessor: 'nationality', filterMethod: (filter, row) => {
              var v = row[filter.id]
                .toString()
                .toUpperCase()
                .search(filter.value.toUpperCase());
              // row[filter.id].toString().startsWith(filter.value)
              if (v >= 0) {
                return true;
              } else return false;
            }, Filter: ({filter, onChange}) => (
              <input
              placeholder="Search"
                onChange={event => onChange(event.target.value)}
                value={filter ? filter.value : ''}
                style={{
                  width: '100%',
                  backgroundColor: '#DCDCDC',
                  color: 'black',
                }}
              />
            )        
            },{  
            Header: 'Matches Refereed',  
            accessor: 'matches_refereed', filterMethod: (filter, row) => {
              var v = row[filter.id]
                .toString()
                .toUpperCase()
                .search(filter.value.toUpperCase());
              // row[filter.id].toString().startsWith(filter.value)
              if (v >= 0) {
                return true;
              } else return false;
            }, Filter: ({filter, onChange}) => (
              <input
              placeholder="Search"
                onChange={event => onChange(event.target.value)}
                value={filter ? filter.value : ''}
                style={{
                  width: '100%',
                  backgroundColor: '#DCDCDC',
                  color: 'black',
                }}
              />
            )      
         
            },{  
            Header: 'Experience',  
            accessor: 'experience',
            filterMethod: (filter, row) => {
              var v = row[filter.id]
                .toString()
                .toUpperCase()
                .search(filter.value.toUpperCase());
              // row[filter.id].toString().startsWith(filter.value)
              if (v >= 0) {
                return true;
              } else return false;
            }, Filter: ({filter, onChange}) => (
              <input
              placeholder="Search"
                onChange={event => onChange(event.target.value)}
                value={filter ? filter.value : ''}
                style={{
                  width: '100%',
                  backgroundColor: '#DCDCDC',
                  color: 'black',
                }}
              />
            )      
        
            },{  
            Header: 'Update',  
            Cell:props=>{
                return(
                    <button  onClick={() => this.openUpdateForm(props.original.referee_id)} >Update</button>
            )
    
            } ,
            sortable:false,
            filterable:false,
            width:100,
            minWidth:100,
            maxWidth:100
            }
        ]  
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay"><div className="Selected_color">Match Referee</div></a><hr></hr>
                </div>
                <div className = "p_details">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.openAddForm}>New</button>
                     </div>
                     <ReactTable
                     className="MyReactTableClass"
                     columns={columns}
                     data={this.state.referees}
                     filterable
                     defaultPageSize={10}
                     ></ReactTable>

                </div>
                <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
         

          <DialogContent>
          <Paper
            style={{
              width: "500px",
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
              onChange={this.handleChange("first_name")}
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
              onChange={this.handleChange("last_name")}
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
              onChange={this.handleChange("middle_name")}
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
              onChange={this.handleChange("city")}
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
              onChange={this.handleChange("nationality")}
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
              onChange={this.handleChange("matches_refereed")}
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
              onChange={this.handleChange("experience")}
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
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </center>
            <br />
            <br /> <br />
            <br />
          </Paper>

          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open:false });
              }}
              variant="outlined"
            >
              Cancel
            </Button>
           
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.open_u}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
         

          <DialogContent>
          <Paper
            style={{
              width: "500px",
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
              value={this.state.first_name}
              onChange={this.handleChange("first_name")}
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
              value={this.state.last_name}
              onChange={this.handleChange("last_name")}
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
              value={this.state.middle_name}
              onChange={this.handleChange("middle_name")}
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
              value={this.state.city}
              onChange={this.handleChange("city")}
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
              value={this.state.nationality}
              onChange={this.handleChange("nationality")}
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
              value={this.state.matches_refereed}
              id="outlined-simple-start-adornment"
              onChange={this.handleChange("matches_refereed")}
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
              value={this.state.experience}
              onChange={this.handleChange("experience")}
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
                onClick={this.handleUpdate}
              >
                Update
              </Button>
            </center>
            <br />
            <br /> <br />
            <br />
          </Paper>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open_u:false });
              }}
              variant="outlined"
            >
              Cancel
            </Button>
           
          </DialogActions>
        </Dialog>

           
            </div>
        )
    }
    
}
RefereeComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RefereeComponent)