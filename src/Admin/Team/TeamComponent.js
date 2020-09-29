import React, { Component } from 'react'
import TeamDataService from './Service/TeamDataService';

import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';
import Header from '../../Scorer/Header'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom"
import Cookies from "js-cookie"
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AdminSidenav from '../AdminSidenav';
import {green,yellow,blue,pink} from "@material-ui/core/colors";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';



const styles = theme => ({
  palette: {
    primary: {
        main: blue[500],
    },
    secondary: {
        main: pink[500],
    }
},
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
  button: {
    margin: theme.spacing.unit,
  },
  newRoot:{
    backgroundColor: "#1854af",
    color : "white",
    "&:hover": {
        backgroundColor: "#6200ea"
      }
 },
 addRoot:{
   backgroundColor: green[500],
   color : "white",
   "&:hover": {
       backgroundColor: green[700]
     }
},
showRoot:{
   backgroundColor: yellow[700],
   color : "black",
   "&:hover": {
       backgroundColor: yellow[900]
     }
},
updateRoot: {
  backgroundColor: "#00A8CF",
  color: "white",
  "&:hover": {
    backgroundColor: "#0487A6",
  },
},
});
 
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
            headerClassName :'header-class',
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
            headerClassName :'header-class',
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
            headerClassName :'header-class',
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
                headerClassName :'header-class', 
                Cell:props=>{
                    return(
                        <Button 
                        variant="contained"
                        color="primary"
                        className={classes.margin,classes.addRoot}
                        onClick={() =>  this.addPlayerClicked(props.original.team_id)}>Add</Button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                width:100,
                minWidth:100,
                maxWidth:100
            },{  
            Header: 'Show player',  
            width:130,
            headerClassName :'header-class',
            Cell:props=>{
                return(
                    <Button 
                    variant="contained"
                    color="primary" 
                    className={classes.margin,classes.showRoot}
                    onClick={() =>  this.showPlayerClicked(props.original.team_id)} >Show</Button>
            )
    
            } ,
            sortable:false,
            filterable:false
           
            },{  
                Header: 'Delete', 
                headerClassName :'header-class', 
                Cell:props=>{
                    return(
                        <Button 
                        variant="contained"
                        color="secondary"
                        onClick={() => this.deleteTeamClicked(props.original.team_id,props.original.tname)}>Delete</Button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                width:100,
                minWidth:100,
                maxWidth:100
            },{  
                Header: 'Update',  
                headerClassName :'header-class',
                Cell:props=>{
                    return(
                        <Button 
                        variant="contained"
                        color="primary"
                        className={this.props.classes.updateRoot}
                         onClick={() => this.openUpdateForm(props.original.team_id)} >Update</Button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                width:100,
                minWidth:100,
                maxWidth:100
                }
        ]  
        if(Cookies.get("role") === undefined || Cookies.get("role") !== "CABI_APPL_ADMIN") return <Redirect to  = "/" /> 
        return (
            <div style={{marginTop:100}}>
              <Header />
                 <AdminSidenav style={{position:"fixed"}}  />
                 <div className = "alignment" style={{marginLeft:"300px",marginTop:"30px",width:"74%",marginBottom:"20px"}}>
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                <br/>
                     <div>
                        <Button variant="contained" size="medium" color="primary" className={classes.margin, classes.newRoot}  onClick={this.openAddForm}>NEW</Button>
                     </div>
                     <br/>
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
              <ValidatorForm onSubmit={this.handleSubmit}
              autoComplete="off">
              <TextValidator
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
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={this.state.tname}
                />
                <TextValidator
                    style={{ width: "93%" }}
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="State"
                    onChange={this.handleChange("tstate")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          State
                        </InputAdornment>
                      )
                    }}
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={this.state.tstate}
                />
                <TextValidator
                    style={{ width: "93%" }}
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Country"
                    onChange={this.handleChange("tcountry")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Country
                        </InputAdornment>
                      )
                    }}
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={this.state.tcountry}
                />
                
              {/*<TextField
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
              /> */}
              <br />
              <br />
              <center>
                <Button
                  variant="contained"
                  style={{ width: "150px" }}
                  className={classes.button}
                  type="submit"
                  color="primary"
                >
                  Create
                </Button>
              </center>
              </ValidatorForm>
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
              color="secondary"
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
                  color="primary"
                  style={{ width: "150px" }}
                  className={classes.button, this.props.classes.updateRoot}
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
              color="secondary"
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