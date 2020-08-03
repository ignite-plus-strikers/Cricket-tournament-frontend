import React, { Component } from 'react'
import TeamDataService from './Service/TeamDataService';

import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";





import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";




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



function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class TeamComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            teams: [],
            message: null,
            open:false,
            open_u:false,
            lanid:"",
            tname:"",
            tstate:"",
            tcountry:"",
            update_id:""
        }
        this.deleteTeamClicked = this.deleteTeamClicked.bind(this)
        this.refreshTeams = this.refreshTeams.bind(this)
        this.updateTeamClicked = this.updateTeamClicked.bind(this)
        this.addTeamClicked = this.addTeamClicked.bind(this)  
        this.addPlayerClicked=this.addPlayerClicked.bind(this)
        this.showPlayerClicked=this.showPlayerClicked.bind(this)
    }
 
    componentDidMount() {
        this.refreshTeams();   
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
 
    deleteTeamClicked(id,teamname) {
        TeamDataService.deleteTeam(id)
            .then(
                response => {
                    this.setState({ message: `Delete of team ${teamname} is Successful` })
                    this.refreshTeams()
                }
            )
    
    } 
 
    updateTeamClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Team/${id}`)
    }
 
    addTeamClicked() {
        this.props.history.push(`/admin/dashboard/TeamAddForm`)
    }
    addPlayerClicked(id) {
        this.props.history.push(`/admin/dashboard/TeamAddPlayer/${id}`)
    }
    showPlayerClicked(id) {
        this.props.history.push(`/admin/dashboard/TeamShowPlayer/${id}`)
    }

    openAddForm = e => {
      this.setState({
        open: true
      
      });
    };
    openUpdateForm = e => {
    this.setState({
       update_id:e
        
      });
      TeamDataService.retrieveTeam(e)
      .then(response => this.setState({
          tname: response.data.tname,
          tstate:response.data.tstate,
          tcountry:response.data.tcountry 
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
     
      var team={
        tname:this.state.tname,
        tstate:this.state.tstate,
        tcountry:this.state.tcountry};
      console.log(team); 
      TeamDataService.createTeam(team)
      .then(
        response => {
            this.setState({open:false })
            this.refreshTeams()
        }
    )  
     
    
     }
     handleUpdate=() => {
     
      var team={
        team_id:this.state.update_id,
        tname:this.state.tname,
        tstate:this.state.tstate,
        tcountry:this.state.tcountry};
      console.log(team); 
      
      TeamDataService.updateTeam(this.state.update_id,team)
      .then(
        response => {
            this.setState({open_u:false })
            this.refreshTeams()
        }
    )  
    
     }
     
    

    render() {

      const { classes } = this.props;

        const columns = [{  
            Header: 'Team name',
            accessor: 'tname',
            filterMethod: (filter, row) => {
                var v = row[filter.id]
                  .toString()
                  .toUpperCase()
                  .search(filter.value.toUpperCase());
                // row[filter.id].toString().startsWith(filter.value)
                if (v >= 0) {
                  return true;
                } else return false;
              },
              Filter: ({filter, onChange}) => (
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
            Header: 'State',  
            accessor: 'tstate',
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
            Header: 'Country',  
            accessor: 'tcountry',
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
            },
                
           {  
                Header: 'Add player',  
                Cell:props=>{
                    return(
                        <button onClick={() =>  this.addPlayerClicked(props.original.team_id)}>Add</button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                width:100,
                minWidth:100,
                maxWidth:100
            },{  
            Header: 'Show player',  
            Cell:props=>{
                return(
                    <button  onClick={() =>  this.showPlayerClicked(props.original.team_id)} >Show</button>
            )
    
            } ,
            sortable:false,
            filterable:false,
            width:100,
            minWidth:100,
            maxWidth:100
            },{  
                Header: 'Delete',  
                Cell:props=>{
                    return(
                        <button onClick={() => this.deleteTeamClicked(props.original.team_id,props.original.tname)}>Delete</button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                width:100,
                minWidth:100,
                maxWidth:100
            },{  
                Header: 'Update',  
                Cell:props=>{
                    return(
                        <button  onClick={() => this.openUpdateForm(props.original.team_id)} >Update</button>
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
                <div class="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                <div className = "details">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.openAddForm}>New</button>
                     </div>
                     <ReactTable
                     className="MyReactTableClass"
                     columns={columns}
                     data={this.state.teams}
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
                <h3>Team</h3>
              </center>
              <TextField
                style={{ width: "93%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Team Name"
                
                onChange={this.handleChange("tname")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Team Name
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ width: "93%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                onChange={this.handleChange("tstate")}
                label="State"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      State
                    </InputAdornment>
                  )
                }}
              />
              <br />
              <TextField
                style={{ width: "93%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                
                onChange={this.handleChange("tcountry")}
                label="Country"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Country
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
                <h3>Team</h3>
              </center>
              <TextField
                style={{ width: "93%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Team Name"
                value={this.state.tname}
                onChange={this.handleChange("tname")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Team Name
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                style={{ width: "93%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                onChange={this.handleChange("tstate")}
                label="State"
                value={this.state.tstate}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      State
                    </InputAdornment>
                  )
                }}
              />
              <br />
              <TextField
                style={{ width: "93%" }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                
                onChange={this.handleChange("tcountry")}
                label="Country"
                value={this.state.tcountry}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Country
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
TeamComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

 
export default withStyles(styles)(TeamComponent)
