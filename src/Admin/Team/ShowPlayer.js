import React, { Component } from 'react'
import PlayerDataService from '../Player/Service/PlayerDataService';
import './Team.css';
import TeamDataService from './Service/TeamDataService';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ShowPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            team_id: this.props.match.params.id,
            teamplayers: [],
            teams:[],
            message: null,
            tname:"",
            t_id:"",
            p_id:"",
            desc:""
        }
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.refreshTeamPlayers = this.refreshTeamPlayers.bind(this)
        this.getTeamName=this.getTeamName.bind(this)
       
    }

    componentDidMount() {
        this.refreshTeamPlayers();
        this.getTeamName();
    }
    getTeamName(){
        TeamDataService.retrieveAllTeams()
        .then(
            response => {
                console.log(response);
                this.setState({ teams : response.data })
            }
        )
        

    }

    refreshTeamPlayers() {
        TeamDataService.retrieveAllTeamPlayers(this.state.team_id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ teamplayers: response.data })
                }
            )
    }

    deletePlayerClicked(teamid,playerid,firstname) {
        TeamDataService.deletePlayer(teamid,playerid)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Delete of player  ${firstname} is Successful` })
                    this.refreshTeamPlayers()
                }
            )
    
    }
    openAlertBox =(e,p,d) => {
      this.setState({
        open1: true,
        t_id:e,
        p_id:p,
        desc:d
      });
    };
     



    render() {
        let teamID=this.state.team_id
        let teamname=this.state.tname

        const columns = [{  
            Header: 'Player first name',
            accessor: 'player_first_name',
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
            Header: 'Last name',  
            accessor: 'player_last_name',
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
            Header: 'Initials',  
            accessor: 'player_initials',
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
                Header: 'Delete',  
                Cell:props=>{
                    return(
                        <button onClick={() => this.openAlertBox(props.original.team_id,props.original.player_id,props.original.player_first_name)}>Delete</button>
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
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                {this.state.teams.map(team =>{
                    if(team.team_id==teamID){
                        teamname=team.tname
                        }
                }
                   
                )
                }
                <center>
                    <h2>{teamname}</h2>
                    <br/><br/>
                    {this.state.message && <div class="alert success">{this.state.message}</div>}
                </center>
                <div className = "teamdetails">
                    
                
                <ReactTable
                className="MyReactTableClass"
                     columns={columns}
                     data={this.state.teamplayers}
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
            Delete the player {this.state.desc}?
            </span>
          </DialogTitle>

          <DialogContent>
          You won’t be able to undo the action.
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open1:false });
                this.deletePlayerClicked(this.state.t_id,this.state.p_id,this.state.desc);
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
           
            </div>
        )
    }
    
}

export default ShowPlayer