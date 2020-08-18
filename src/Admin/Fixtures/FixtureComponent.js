import React, { Component } from 'react'
import FixtureDataService from './Service/FixtureDataService';
import TeamDataService from '../Team/Service/TeamDataService';
import SeriesDataService from '../Series/Service/SeriesDataService';
import ScorerDataService from './Service/ScorerdataService';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import Button from "@material-ui/core/Button";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";


function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
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
   

class FixtureComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            fixtures: [],
            message: null,
            open1:false,
            open2:false,
            update_id:"",
            delete_id:"",
            desc:"",
            update_desc:"",
            open:false,
            open_u:false,
            fixture_id:"",
            team1:"",
            team2:"",
            home_team:"",
            match_type:"",
            venue:"",
            series_name:"",
            series_id:"",
            description:"",
            fixture_date:"",
            fixture_time:"",
            gmt_offset:"",
            live_coverage:"Yes",
            scorer_id:"",
            scorer_name:"",
            teams:[],
            series:[],
            scorers:[]

        }
        this.deleteFixtureClicked = this.deleteFixtureClicked.bind(this)
        this.refreshFixtures = this.refreshFixtures.bind(this)
        this.updateFixtureClicked = this.updateFixtureClicked.bind(this)
        this.addFixtureClicked = this.addFixtureClicked.bind(this)   
    }
 
    componentDidMount() {
        this.refreshFixtures();   
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
  
    refreshFixtures() {
        FixtureDataService.retrieveAllFixtures()
            .then(
                response => {
                    console.log(response);
                    this.setState({ fixtures: response.data })
                }
            )
    }
 
    deleteFixtureClicked(id,description) {
        FixtureDataService.deleteFixture(id)
            .then(
                response => {
                    this.setState({ message: `Delete of fixture ${description} is successful` })
                    this.refreshFixtures()
                }
            )
    
    } 
 
    updateFixtureClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Fixture/${id}`)
    }
 
    addFixtureClicked() {
        this.props.history.push(`/admin/dashboard/FixtureAddForm`)
    }




    openEditBox = (e,d) => {
        this.setState({
          open2: true,
          update_id:e,
          update_desc:d
        });
      };
    handleClose = () => {
        this.setState({ open1: false, open2: false, });
      };
      openAlertBox =(e,d) => {
        this.setState({
          open1: true,
          delete_id:e,
          desc:d
        });
      };

      openAddForm = e => {
        this.setState({
          open: true
        
        });
      };
      openUpdateForm = e => {
      this.setState({
         fixture_id:e
          
        });
        FixtureDataService.retrieveFixture(e)
        .then(response => this.setState({
        team1:response.data.team1,
        team2:response.data.team2,
        home_team:response.data.home_team,
        match_type:response.data.match_type,
        venue:response.data.venue,
        series_id:response.data.series_id,
        description:response.data.description,
        fixture_date:response.data.fixture_date,
        fixture_time:response.data.fixture_time,
        gmt_offset:response.data.gmt_offset,
        scorer_id:response.data.scorer_id,
        live_coverage:response.data.live_coverage


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
       
        let seriesName
        let scorer_name
        

       
        this.state.series.map(s =>{
            if(s.series_id===this.state.series_id){
               seriesName=s.series_short_name
                }
        }
           
        )


        
        this.state.scorers.map(s =>{
            if(s.scorer_id===this.state.scorer_id){
               scorer_name=s.firstname+" "+s.middlename+" "+s.lastname
                }
        }
           
        )
      
       var fixture={
        team1:this.state.team1,
        team2:this.state.team2,
        home_team:this.state.home_team ,
        series_id:this.state.series_id ,
        series_name:seriesName ,
        fixture_date:this.state.fixture_date ,
        fixture_time:this.state.fixture_time, 
        match_type:this.state.match_type,
        description: this.state.description,
        live_coverage:this.state.live_coverage ,
        venue:this.state.venue ,
        scorer_id:this.state.scorer_id ,
        scorer_name:scorer_name ,
        gmt_offset:this.state.gmt_offset
    }
        console.log(fixture); 
        FixtureDataService.createFixture(fixture)
        .then(
          response => {
              this.setState({open:false })
              this.refreshFixtures()
          }
      )  
       
      
       }
       handleUpdate=() => {

        let seriesName
        let scorer_name
        

       
        this.state.series.map(s =>{
            if(s.series_id===this.state.series_id){
               seriesName=s.series_short_name
                }
        }
           
        )


        
        this.state.scorers.map(s =>{
            if(s.scorer_id===this.state.scorer_id){
               scorer_name=s.firstname+" "+s.middlename+" "+s.lastname
                }
        }
           
        )
        
        var fixture={
          fixture_id:this.state.fixture_id,
          team1:this.state.team1,
          team2:this.state.team2,
          home_team:this.state.home_team ,
          series_id:this.state.series_id ,
          series_name:seriesName ,
          fixture_date:this.state.fixture_date ,
          fixture_time:this.state.fixture_time, 
          match_type:this.state.match_type,
          description: this.state.description,
          live_coverage:this.state.live_coverage ,
          venue:this.state.venue ,
          scorer_id:this.state.scorer_id ,
          scorer_name:scorer_name ,
          gmt_offset:this.state.gmt_offset
      }
          console.log(fixture); 
          FixtureDataService.updateFixture(this.state.fixture_id, fixture)
        .then(
          response => {
              this.setState({open_u:false })
              this.refreshFixtures()
          }
      )  
      
       }
       
  
  
    render() {
      const { classes } = this.props;


        const columns = [{  
            Header: 'Team 1',
            accessor: 'team1',
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
            Header: 'Team 2',  
            accessor: 'team2',
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
            Header: 'Home town',  
            accessor: 'home_team',
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
            Header: 'Series',  
            accessor: 'series_name',
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
            Header: 'Match type',  
            accessor: 'match_type',
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
            Header: 'Description',  
            accessor: 'description',
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
            Header: 'Match date',  
            accessor: 'fixture_date',
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
              Header: 'Match time',  
              accessor: 'fixture_time',
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
            Header: 'GMT offset',  
            accessor: 'gmt_offset',
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
            Header: 'Venue',  
            accessor: 'venue',
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
            Header: 'Live coverage',  
            accessor: 'live_coverage',
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
            Header: 'Scorer',  
            accessor: 'scorer_name',
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
                Header: 'Delete',  
                headerClassName :'header-class',
                Cell:props=>{
                    return(
                        <div>
                       <button onClick={() => this.openAlertBox(props.original.fixture_id,props.original.description)}>Delete</button>
                        </div>
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
                    <button  onClick={() => this.openUpdateForm(props.original.fixture_id)} >Update</button>
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
                <div className = "details">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button class="btn newBtn" onClick={this.openAddForm}>New</button>
                     </div>
                    
                     <ReactTable
                     className="MyReactTableClass"
                     columns={columns}
                     data={this.state.fixtures}
                     filterable
                     defaultPageSize={10}
                     ></ReactTable>
 
                </div>
       


        <Dialog
          open={this.state.open1}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder"
              }}
            >
            Delete the fixture {this.state.desc}?
            </span>
          </DialogTitle>

          <DialogContent>
          You won’t be able to undo the action.
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open1:false });
                this.deleteFixtureClicked(this.state.delete_id,this.state.desc);
              }}
              variant="outlined"
            >
            Yes
            </Button>
            <Button
             onClick={() => {
                this.setState({ open1: false});
              }}
              variant="outlined"
            >
            No
            </Button>
          </DialogActions>
        </Dialog>

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
                <h3>Fixture</h3>
              </center>
              
               
              
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                
                variant="outlined"
                label="Team-1"
                onChange={this.handleChange("team1")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Team-1</InputAdornment>
                  )
                }}
              >
                {this.state.teams.map(option => (
                  <MenuItem key={option.tname} value={option.tname}>
                    {option.tname}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Team-2"
                onChange={this.handleChange("team2")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Team-2</InputAdornment>
                  )
                }}
              >
                {this.state.teams.map(option => (
                  <MenuItem key={option.tname} value={option.tname}>
                    {option.tname}
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
                onChange={this.handleChange("home_team")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Home Team</InputAdornment>
                  )
                }}
              >
                {this.state.teams.map(option => (
                  <MenuItem key={option.tname} value={option.tname}>
                    {option.tname}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Match Type"
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
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Venue"
                onChange={this.handleChange("venue")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Venue</InputAdornment>
                  )
                }}
              >
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Series"
                
                onChange={this.handleChange("series_id")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Series</InputAdornment>
                  )
                }}
              >
                {this.state.series.map(option => (
                  <MenuItem key={option.series_id} value={option.series_id}>
                    {option.series_short_name}
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
            onChange={this.handleChange("fixture_time")}
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
                onChange={this.handleChange("scorer_id")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Scorer</InputAdornment>
                  )
                }}
              >
                {this.state.scorers.map(option => (
                  <MenuItem key={option.scorer_id} value={option.scorer_id}>
                    {option.firstname} {option.middlename} {option.lastname}
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
                <h3>Fixture</h3>
              </center>
              
               
              
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                value={this.state.team1}
                variant="outlined"
                label="Team-1"
                onChange={this.handleChange("team1")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Team-1</InputAdornment>
                  )
                }}
              >
                {this.state.teams.map(option => (
                  <MenuItem key={option.tname} value={option.tname}>
                    {option.tname}
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
                {this.state.teams.map(option => (
                  <MenuItem key={option.tname} value={option.tname}>
                    {option.tname}
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
                {this.state.teams.map(option => (
                  <MenuItem key={option.tname} value={option.tname}>
                    {option.tname}
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
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                value={this.state.venue}
                label="Venue"
                onChange={this.handleChange("venue")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Venue</InputAdornment>
                  )
                }}
              >
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Series"
                value={this.state.series_id}
                onChange={this.handleChange("series_id")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Series</InputAdornment>
                  )
                }}
              >
                {this.state.series.map(option => (
                  <MenuItem key={option.series_id} value={option.series_id}>
                    {option.series_short_name}
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
                value={this.state.description}
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
                value={this.state.fixture_date}
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
            value={this.state.fixture_time}
            onChange={this.handleChange("fixture_time")}
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
                value={this.state.gmt_offset}
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
                value={this.state.scorer_id}
                label="Scorer"
                onChange={this.handleChange("scorer_id")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Scorer</InputAdornment>
                  )
                }}
              >
                {this.state.scorers.map(option => (
                  <MenuItem key={option.scorer_id} value={option.scorer_id}>
                    {option.firstname} {option.middlename} {option.lastname}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ width: "45%" }}
                select
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Live coverage"
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
              
              <center>
                <Button
                  variant="contained"
                  style={{ width: "150px" }}
                  className={classes.button}
                  type="submit"
                  onClick={this.handleUpdate}
                >
                  Update
                  
                </Button>
              </center>
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
FixtureComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default  withStyles(styles)(FixtureComponent)
