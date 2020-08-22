import React, { Component } from 'react'
import PlayerDataService from './Service/PlayerDataService';
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
import MenuItem from "@material-ui/core/MenuItem";
import Header from '../../Scorer/Header'
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SideNav from '../../SideNav/SideNav';
import AdminSidenav from '../AdminSidenav';

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
    value: "Right-handed-batsman",
    label: "Right-handed-batsman"
  },
  {
    value: "Left-handed-batsman",
    label: "Left-handed-batsman"
  },
 
];
 
const Bowling = [
  {
    value: "Right-handed-bowler",
    label: "Right-handed-bowler"
  },
  {
    value: "Left-handed-bowler",
    label: "Left-handed-bowler"
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

function Transition(props) {
  return <Slide direction="up" {...props} />;
}



class ListPlayersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null,
            open:false,
            open_u:false,
            player_id:'',
            first_name:'',
            last_name:'',
            player_initials:'',
            gender:'',
            player_dob:'',
            category:'',
            nationality:'',
            player_batting_style:'',
            player_bowling_style:'',
            player_role:'',
            player_status:''
        }
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.refreshPlayers = this.refreshPlayers.bind(this)
        this.updatePlayerClicked = this.updatePlayerClicked.bind(this)
        this.addPlayerClicked = this.addPlayerClicked.bind(this)
    }

    componentDidMount() {
        this.refreshPlayers();
    }

    refreshPlayers() {
        PlayerDataService.retrieveAllPlayers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ players: response.data })
                }
            )
    }

    deletePlayerClicked(id,firstname) {
        PlayerDataService.deletePlayer(id)
            .then(
                response => {
                    this.setState({ message: `Delete of player  ${firstname} is Successful` })
                    this.refreshPlayers()
                }
            )
    
    }

    updatePlayerClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Player/${id}`)
    }

    addPlayerClicked() {
        this.props.history.push(`/admin/dashboard/PlayerAddForm`)
    }


    openAddForm = e => {
      this.setState({
        open: true
      
      });
    };
    openUpdateForm = e => {
    this.setState({
       player_id:e
        
      });
      PlayerDataService.retrievePlayer(e)
            .then(response => this.setState({
                first_name: response.data.first_name,
                last_name:response.data.last_name,
                player_initials:response.data.player_initials,
                gender:response.data.gender,
                player_dob :response.data.player_dob,
                category:response.data.category,
                nationality:response.data.nationality,
                player_batting_style:response.data.player_batting_style,
                player_bowling_style :response.data.player_bowling_style,
                player_role :response.data.player_role,
                player_status :response.data.player_status
                

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
     
     var player={
       first_name :this.state.first_name,
       last_name : this.state.last_name,
       player_initials : this.state.player_initials,
       gender : this.state.gender,
       player_dob: this.state.player_dob,
       category : this.state.category,
       nationality: this.state.nationality,
       player_batting_style : this.state.player_batting_style,
       player_bowling_style : this.state.player_bowling_style,
       player_status : this.state.player_status,
       player_role : this.state.player_role
     };
      console.log(player); 
      PlayerDataService.createPlayer(player)
      .then(
        response => {
            this.setState({open:false })
            this.refreshPlayers()
        }
    )  
     
    
     }
     handleUpdate=() => {
      var player={
        player_id:this.state.player_id,
        first_name : this.state.first_name,
        last_name :this.state.last_name,
        player_initials : this.state.player_initials,
        gender : this.state.gender,
        player_dob: this.state.player_dob,
        category : this.state.category,
        nationality: this.state.nationality,
        player_batting_style : this.state.player_batting_style,
        player_bowling_style : this.state.player_bowling_style,
        player_status :this.state.player_status,
        player_role : this.state.player_role
      };
       console.log(player); 
     
      
       PlayerDataService.updatePlayer(this.state.player_id, player)
      .then(
        response => {
            this.setState({open_u:false })
            this.refreshPlayers()
        }
    )  
    
     }
     



    render() {
      const { classes } = this.props;
     
        const columns = [{  
            Header: 'First name',
            accessor: 'first_name',
            width:150,
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
              },Filter: ({filter, onChange}) => (
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
            Header: 'Last name',  
            accessor: 'last_name',
            width:150,
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
            Header: 'Player initials',  
            accessor: 'player_initials',
            width:130,
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
            Header: 'Gender',  
            accessor: 'gender',
            width:130,
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
            Header: 'Date of birth',  
            accessor: 'player_dob',
            width:130,
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
            Header: 'Category',  
            accessor: 'category',
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
            Header: 'Nationality',  
            accessor: 'nationality',
            width:150,
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
            Header: 'Batting style',  
            accessor: 'player_batting_style',
            width:190,
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
            Header: 'Bowling style',  
            accessor: 'player_bowling_style',
            width:180,
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
            Header: 'Player role',  
            accessor: 'player_role',
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
            Header: 'Player status',  
            accessor: 'player_status',
            width:130,
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
            Header: 'Update', 
            headerClassName :'header-class', 
            Cell:props=>{
                return(
                    <button  onClick={() => this.openUpdateForm(props.original.player_id)} >Update</button>
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
                     data={this.state.players}
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
         
          <Paper  style={{width:"500px",height:"570px",paddingLeft:"2%",paddingRight:"0%",paddingTop:"1%"}}>
        <center><h3>Player</h3></center>  
        <TextField
        style={{width:"45%"}}
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="First Name"
          onChange={this.handleChange("first_name")}
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
          onChange={this.handleChange("last_name")}
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
          onChange={this.handleChange("player_initials")}
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
          onChange={this.handleChange("gender")}
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
          onChange={this.handleChange("player_dob")}
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
          onChange={this.handleChange("category")}
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
          onChange={this.handleChange("nationality")}
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
          onChange={this.handleChange("player_batting_style")}
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
          onChange={this.handleChange("player_bowling_style")}
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
          onChange={this.handleChange("player_role")}
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
          onChange={this.handleChange("player_status")}
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
      <center><Button variant="contained" style={{width:"150px"}} className={classes.button}  onClick={this.handleSubmit}>
        Create
      </Button></center>  
        
       
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
          <Paper  style={{width:"500px",height:"570px",paddingLeft:"2%",paddingRight:"0%",paddingTop:"1%"}}>
        <center><h3>Player</h3></center>  
        <TextField
        style={{width:"45%"}}
          id="outlined-simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="First Name"
          value={this.state.first_name}
          onChange={this.handleChange("first_name")}
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
          value={this.state.last_name}
          onChange={this.handleChange("last_name")}
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
          value={this.state.player_initials}
          onChange={this.handleChange("player_initials")}
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
          value={this.state.gender}
          onChange={this.handleChange("gender")}
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
          value={this.state.player_dob}
          onChange={this.handleChange("player_dob")}
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
          value={this.state.category}
          onChange={this.handleChange("category")}
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
          value={this.state.nationality}
          onChange={this.handleChange("nationality")}
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
          value={this.state.player_batting_style}
          onChange={this.handleChange("player_batting_style")}
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
          value={this.state.player_bowling_style}
          onChange={this.handleChange("player_bowling_style")}
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
          value={this.state.player_role}
          onChange={this.handleChange("player_role")}
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
          value={this.state.player_status}
          onChange={this.handleChange("player_status")}
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
      <center><Button variant="contained" style={{width:"150px"}} className={classes.button}  onClick={this.handleUpdate}>
        Update
      </Button></center>  
        
       
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
ListPlayersComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListPlayersComponent)